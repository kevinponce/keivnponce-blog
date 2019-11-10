---
title: S3 Presigned Upload Rails
date: "2019-10-29T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
---

Before you start playing around with rails, it is important to setup AWS to support presigned upload.

## Create S3 bucket
When you are creating you S3 bucket, make sure you configureyour CORS:
```
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
<CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>POST</AllowedMethod>
    <AllowedHeader>*</AllowedHeader>
</CORSRule>
</CORSConfiguration>
```

If you need the files in the bucket to be public, make sure you make sure under block access is disabled.

## Create IAM
When you are granting access to the SDK, you do not want to use your primary account for security purposes. Incase it is compromised, you can restrict it to only have desired actions. Do not make it an admin!
Also when you are creating your new IAM make sure you select `Programmatic access`. This will allow you have to API access through the sdk.
You will also need to set the permissions policies. I recomend creating a custom one like this:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:Post*"
            ],
            "Resource": [
                "arn:aws:s3:::example-avatars/*"
            ]
        }
    ]
}
```

Make sure you change `example-avatars` to match your s3 bucket name.

When you are create the new IAM copy they `key` and `secret`

```
gem 'aws-sdk-s3'
gem 'dotenv-rails', groups: [:development, :test]
```

`.env`
```
AWS_KEY=XXXXXXXXXXX
AWS_SECRET=XXXXXXXX
```


`config/initializers/aws.rb`
```
require 'aws-sdk-s3'

Aws.config.update({
  region: 'us-west-1',
  credentials: Aws::Credentials.new(ENV['AWS_KEY'], ENV['AWS_SECRET'])
})
```

`app/controllers/avatar_s3_presign_controller.rb`
```
class AvatarS3PresignController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false

  def create
    render json: {
      'form-data' => s3_direct_post.fields,
      key: key,
      presigned_post: s3_direct_post,
      url: s3_direct_post.url,
    }
  end

  private

  def key
    @key ||= "user/#{client.id}/avatar-#{SecureRandom.uuid}"
  end

  def s3_direct_post
    @s3_direct_post ||= begin
      s3 = Aws::S3::Resource.new
      bucket = s3.bucket('example_bucket')
      bucket.presigned_post(key: key, success_action_status: '201', acl: 'public-read')
    end
  end

  def client
    Client.last # todo make sure you change this not to be the last client
  end
end
```

`app/controllers/avatar_controller.rb`
```
class AvatarController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  before_action :fetch_client

  def create
    if @client.update(avatar_params)
      render json: { message: 'Uploaded' }
    else
      render json: { message: @client.errors.full_messages.to_sentence }
    end
  end

  def edit;end

  private

  def avatar_params
    params.require(:client).permit(:avatar_url)
  end

  def fetch_client
    @client = Client.last # todo make sure you change this not to be the last client
  end
end
```

`app/assets/javascripts/avatar.js`
```
function readURL(input) {
  if (input.files && input.files[0]) {
    const file = input.files[0];

    $.post('/avatar_s3_presign', {}, function (resp) {
      var image = resp.url + '/' + resp.key;

      var formData = new FormData();
      for (let key in resp.form_data) {
        formData.append(key, resp.form_data[key]);
      }
      formData.append('file', input.files[0]);

      $.ajax({
        type: "POST",
        url: resp.url,
        data: formData,
        processData: false,
        contentType: false,
        success: function(uploadResp) {
          $.post('/avatar', {
            client: {
              avatar_url: image,
            }
          }, function (resp) {
            var reader = new FileReader();
            reader.onload = function(e) {
              $('#imagePreview').css('background-image', 'url('+e.target.result +')');
              $('#imagePreview').hide();
              $('#imagePreview').fadeIn(650);
            }

            reader.readAsDataURL(input.files[0]);
          }).fail(function(response) {
            var message = response.responseJSON.message || 'On no something went wrong';
            alert(message);
          });
        }
      })
    });
  }
}

$("#imageUpload").change(function() {
  readURL(this);
});
```

`app/views/avatar/edit.html.erb`
```
<%= javascript_include_tag 'avatar' %>
<%= stylesheet_link_tag 'avatar' %>
<div class="avatar-upload">
  <div class="avatar-edit">
    <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
    <label for="imageUpload"></label>
  </div>
  <div class="avatar-preview">
    <div id="imagePreview" style="background-image: url(<%= @client.avatar_url || 'http://i.pravatar.cc/500?img=7' %>);">
    </div>
  </div>
</div>
```

`app/stylesheets/edit.scss`
```
.avatar-upload {
  position: relative;
  max-width: 205px;
  margin: 50px auto;

  .avatar-edit {
    position: absolute;
    right: 12px;
    z-index: 1;
    top: 10px;

    input {
      display: none;
      + label {
        display: inline-block;
        width: 34px;
        height: 34px;
        margin-bottom: 0;
        border-radius: 100%;
        background: #FFFFFF;
        border: 1px solid transparent;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
        cursor: pointer;
        font-weight: normal;
        transition: all .2s ease-in-out;

        &:hover {
          background: #f1f1f1;
          border-color: #d6d6d6;
        }

        &:after {
          content: "\f040";
          font-family: 'FontAwesome';
          color: #757575;
          position: absolute;
          top: 10px;
          left: 0;
          right: 0;
          text-align: center;
          margin: auto;
        }
      }
    }
  }

  .avatar-preview {
    width: 192px;
    height: 192px;
    position: relative;
    border-radius: 100%;
    border: 6px solid #F8F8F8;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);

    > div {
      width: 100%;
      height: 100%;
      border-radius: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}
```

`config/routes.rb`
```
Rails.application.routes.draw do
  resources :avatar, only: [:create]
  resources :avatar_s3_presign, only: [:create]
end
```


