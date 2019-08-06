---
title: Rails export/import users
date: "2019-08-03T22:12:00.121Z"
tags: ["Ruby", "Ruby on Rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
---

Here is a simple script to export and import users in rails.
Copy and past the following code to `lib/data.rake`.

```ruby
# lib/data.rake
namespace :data do
  namespace :export do
    desc 'export users'
    task users: :environment do
      dir = File.join(Rails.root, 'data')
      FileUtils.mkdir_p(dir) unless File.directory?(dir)

      filepath = File.join(Rails.root, 'data', 'users.json')

      users = User.all
      File.open(filepath, 'w') do |f|
        users.each do |u|
          f.puts u.to_json
        end
      end

      puts "#{users.size} users export to #{filepath}"
    end
  end

  namespace :import do
    desc 'import users'
    task users: :environment do
      filepath = File.join(Rails.root, 'data', 'users.json')
      abort "#{filepath} does not exist" unless File.exist?(filepath)

      File.readlines(filepath).each do |user_str|
        user = JSON.parse(user_str)

        User.create(user)
      end
    end
  end
end
```

To export users run:
```
rails data:export:users
```

To import users run:
```
rails data:import:users
```