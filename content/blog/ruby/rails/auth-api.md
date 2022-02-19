---
title: Rails Api Auth
date: "2019-08-07T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to add search to ruby on rails using Algolia which will simply search queries and speed up search results.
---

```
gem 'devise'
gem 'jwt'

group :development, :test do
  gem 'dotenv-rails'
end
```

```
bin/rails generate devise:install
bin/rails generate devise User
bin/rails db:migrate
```

# config/application.rb
```
Dotenv::Railtie.load if defined?(Dotenv)
```

# config/routes.rb
```
namespace :api, defaults: { format: :json } do
    devise_for :users
end
```

```
bin/rails routes | grep users
```

# .env
```
SECRET_KEY_BASE=hmmmmm
```

# app/models/user.rb
```
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  def generate_jwt
    JWT.encode({
      sub: id,
      exp: 60.days.from_now.to_i
    }, ENV['SECRET_KEY_BASE'])
  end
end
```

# app/controllers/api/sessions_controller.rb
```
# frozen_string_literal: true

class Api::SessionsController < Devise::SessionsController
  skip_before_action :verify_authenticity_token, raise: false
  skip_before_action :verify_signed_out_user, raise: false
  respond_to :json

  def create
    user = User.find_by_email(email_param)

    if user.try(:valid_password?, password_param)
      @current_user = user
      cookies[:authorization] = { value: @current_user.generate_jwt, httponly: true }
    else
      render json: { message: 'email or password is invalid', errors: [] }, status: 422
    end
  end

  def destroy
    cookies.delete :authorization
    render json: { message: 'signed out' }
  end

  private

  def email_param
    params.require(:user).fetch(:email, '').try(:strip).try(:downcase)
  end

  def password_param
    params.require(:user).fetch(:password, '')
  end

  def auth_token
    request.headers['Authorization'].try(:split, ' ').try(:last) || cookies[:authorization]
  end
end
```

# app/views/api/sessions/create.json.jbuilder
```
json.user do |json|
  json.token      @current_user.generate_jwt
  json.id         @current_user.id
  json.email      @current_user.email
  json.updated_at @current_user.updated_at
  json.created_at @current_user.created_at
end
```


# app/controllers/api/passwords_controller.rb
```
class Api::PasswordsController < Devise::PasswordsController
  skip_before_action :verify_authenticity_token, raise: false
  respond_to :json

  def create
    missing_email and return if email_param.blank?

    user = User.find_by(email: email_param)
    if user
      raw, enc = Devise.token_generator.generate(User, :reset_password_token)
      user.reset_password_token = enc
      user.reset_password_sent_at = Time.now.utc

      if user.save
        # TODO: send email to user.email with reset password url  "/users/reset-password/#{user.id}/#{raw}"
        
      else
        render_error user.errors
        return
      end
    end

    render json: { message: 'Please check your email' }
  end

  def update
    token = Devise.token_generator.digest(User, :reset_password_token, reset_password_token_param)
    @user = User.find_by({ id: user_id })
    user_not_found and return unless @user

    invalid_reset_token and return if @user.reset_password_token != token
    invalid_reset_token and return if @user.nil?

    password_confirmation_does_not_match and return if password_param != password_confirmation_param

    @user.password = password_param
    unless @user.save
      render_error @user.errors
    end

    cookies[:authorization] = { value: @user.generate_jwt, httponly: true }
  end

  private

  def email_param
    params.require(:user).fetch(:email)
  end

  def reset_password_token_param
    params.require(:user).fetch(:reset_password_token)
  end

  def user_id
    params.require(:user).fetch(:id)
  end

  def password_param
    params.require(:user).fetch(:password)
  end

  def password_confirmation_param
    params.require(:user).fetch(:password_confirmation)
  end

  def missing_email
    render json: { message: 'Please provide an email address', errors: [] }, status: 422
  end

  def invalid_reset_token
    render json: { message: 'Invalid reset token', errors: [] }, status: 422
  end

  def user_not_found
    render json: { message: 'User not found' }, status: 404
  end

  def password_confirmation_does_not_match
    render json: { message: 'Password does not match password confirmation', errors: [] }, status: 422
  end
end
```

# app/views/api/passwords/update.json.jbuilder
```
json.user do |json|
  json.id         @user.id
  json.email      @user.email
  json.updated_at @user.updated_at
  json.created_at @user.created_at
end
```


# app/controllers/api/registrations_controller.rb

```
# frozen_string_literal: true

class Api::RegistrationsController < Devise::RegistrationsController
  skip_before_action :verify_authenticity_token, raise: false

  respond_to :json

  def create
    build_resource(registration_params)

    if resource.save
      @current_user = resource
      cookies[:authorization] = { value: @current_user.generate_jwt, httponly: true }
    else
      render_error resource.errors
    end
  end

  private

  def registration_params
    params.require(:user).permit(:email,
                                 :password,
                                 :password_confirmation)
  end

  def render_error(errors)
    render json: {
      errors: errors.messages.map { |id, err| { field: id.to_s, message: err.to_sentence } },
      message: errors.full_messages.to_sentence
    }, status: 422
  end
end

```


# app/views/api/registrations/create.json.jbuilder
```
json.user do |json|
  json.token      @current_user.generate_jwt
  json.id         @current_user.id
  json.email      @current_user.email
  json.updated_at @current_user.updated_at
  json.created_at @current_user.created_at
end

```

# app/controllers/application_controller.rb
```
# frozen_string_literal: true

class ApplicationController < ActionController::Base
  helper_method :current_user

  def auth_token
    request.headers['Authorization'].try(:split, ' ').try(:last) || cookies[:authorization]
  end

  def require_auth
    render status: 401, json: { message: 'Please sign in' } unless current_user
  end

  def current_user
    @current_user ||= User.find_by(id: @current_user_id)
  end

  def authenticate_user!
    return unless auth_token
    unless AuthToken.find_by(auth_token: auth_token).try(:active)
      render status: 401, json: { message: 'Please sign in' }
      return
    end

    begin
      jwt_payload = JWT.decode(auth_token, ENV['SECRET_KEY_BASE']).first

      @current_user_id = jwt_payload['sub']
    rescue JWT::ExpiredSignature, JWT::VerificationError, JWT::DecodeError
      render status: 401, json: { message: 'Please sign in' }
    end
  end

  def signed_in?
    @current_user_id.present?
  end
end
```

# app/controllers/api_controller.rb
```
class ApiController < ApplicationController
    before_action :authenticate_user!
    skip_before_action :verify_authenticity_token, raise: false

   def require_auth
    return if current_user

    render status: 401, json: { message: 'Please sign in' }
  end
end

```

# app/controllers/api/example_controller.rb
```
class Api::ExampleController < ApiController
  def index
    render json: { user: current_user }
  end
end
```
