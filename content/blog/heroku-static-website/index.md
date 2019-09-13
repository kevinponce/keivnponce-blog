---
title: Heroku static website 
date: "2019-09-12T12:12:00.121Z"
tags: ["html"]
header: { type: 'icon', bgColor: '#E44D25', icon: 'html' }
---

Before you begin make sure you have ruby installed.

I personally like to use rvm to manage the version.


Run the following commands in a termainal:
```
mkdir -p site/public/{images,js,css}
touch site/{config.ru,public/index.html,public/example.html}
cd site && bundle init
echo -e "source 'https://rubygems.org'\\ngem 'rack'" > Gemfile
bundle install
```

Update `public/index.html` and `public/example.html` to have html you descire.


Also update `config.ru` to:
```ruby
use Rack::Static,
  :urls => ["/images", "/js", "/css"],
  :root => "public"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}

map "/example" do
  run lambda { |env|
    [
      200, 
      {
        'Content-Type'  => 'text/html', 
        'Cache-Control' => 'public, max-age=86400' 
      },
      File.open('public/example.html', File::RDONLY)
    ]
  }
end
```

To run this static site locally, run in a terminal:
```
rackup
```

go to `localhost:9292` to see your hard work.

When you make a change to the project, you will have to restart rackup.

Once you have everything done, it is time to deploy by running the following:
```
git init
git add .
git commit -m "create static website"
heroku login
heroku create
git push heroku master
heroku open
```
