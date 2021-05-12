---
title: Create Safe Rails
date: "2019-08-03T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: Learn how to create a safe rails app that will help find vulnerabilities, performance issues, and well tested. You will setup rspec, brakeman, bullet, bundler-audit, database_cleaner, rubocop, and simplecov.
---
## Create Application
First you need to create new project by running the following command in a terminal:
```
rails new app-name --webpack=react -T -d postgresql
```

`--webpack=react`  adds webpacker and configures it to work with react
`-T` will prevent creating minitest test
`-d postgresql` will create rails project with postgresql instead of sqlite

## Update `development` and `test` gems
Next you need update `Gemfile` to have the following in group `:development, :test`:
```ruby
group :development, :test do
  gem 'brakeman'
  gem 'bullet'
  gem 'bundler-audit'
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'database_cleaner'
  gem 'factory_bot_rails'
  gem 'rspec-rails', '~> 3.5'
  gem 'rubocop'
  gem 'simplecov'
end
```

To install the gems, run the following command in a terminal:
```
bundle install
```

### Rspec
Rspec is a test framework for ruby that makes it simple to test a application.
To setup rspec, run the following command in a terminal:
```ruby
rails generate rspec:install
```

When you add integrate a gem into Rspec, it is best to add it under support.
To setup rspec to work with support add the following:
1. Uncomment out `Dir[Rails.root.join('spec', 'support', '**', '*.rb')].each { |f| require f }` in `spec/rails_helper.rb`
2. Creatre folder `spec/support`

### Factory Bot
Factory Bot provides factory methods to create test fixtures for automated software testing.
It makes it easy to create, or build data for tests in ruby.

Create a support file to add Factory Bot to Rspec by doing the following to `spec/support/factory_bot.rb`:
```ruby
# frozen_string_literal: true

RSpec.configure do |config|
  config.include FactoryBot::Syntax::Methods
end
```

# Database Cleaner
Database Cleaner is a set of gems containing strategies for cleaning your database in Ruby.
Create a support file to add Database Cleaner to Rspec by doing the following to `spec/support/database_cleaner.rb`:
```ruby
# frozen_string_literal: true

RSpec.configure do |config|
  config.before(:suite) do
    DatabaseCleaner.strategy = :transaction
    DatabaseCleaner.clean_with(:truncation)
  end

  config.around(:each) do |example|
    DatabaseCleaner.cleaning do
      example.run
    end
  end
end
```

### Brakeman
Brakeman is a static analysis tool which checks Ruby on Rails applications for security vulnerabilities.
There is not integration for rspec.
To run Brakeman, run the following command in a terminal:
```
bundle exec brakeman
``` 

### Bullet
The Bullet gem is designed to help you increase your application's performance by reducing the number of queries it makes.
This gem helps find a lot of potenial performance issues.


To add Bullet add the following snippet code to `config/environments/development.rb` and `config/environments/test.rb`
```ruby
Rails.application.configure do
  ...

  config.after_initialize do
    Bullet.enable = true
    Bullet.bullet_logger = true
    Bullet.raise = true # raise an error if n+1 query occurs
  end
end
```

### Bundler Audit
Bundler Audit checks for vulnerable versions of gems in Gemfile.lock.
This is important because we often add gems to make our live easier but are not able to keep up with vulnerable in all of our gems.
To run Bundler Audit, run the following command in a terminal:
`bundle exec bundle-audit`

### Rubocop
RuboCop is a Ruby static code analyzer and code formatter.
This will enforce many of the guidelines.
To run Rubocop, run the following command in a terminal:
`bundle exec rubocop`

### Simplecov
SimpleCov is a code coverage analysis tool for Ruby.
It allows you to see how well your coverage is.
Create a support file to add Simplecov to Rspec by doing the following to `spec/support/simplecov.rb`:
```ruby
# frozen_string_literal: true

require 'simplecov'

SimpleCov.start
```

To see areas you need to improve by opening the following file in your browser `coverage/index.html`
Make sure to add `/coverage/` to `.gitignore`.

# Run
To make see if everything is good with your application run the following:
```ruby
bundle exec rspec
bundle exec brakeman
bundle exec bundle-audit
bundle exec rubocop
```

# Database
Before you can run your application, you need to make sure your database is create and your migrations up to date.
This can be done by running the following command:
```ruby
bundle exec rails db:create
bundle exec rails db:migrate
```

Last but not least, to your application run the following command in a terminal:
```ruby
bundle exec rails s
```
