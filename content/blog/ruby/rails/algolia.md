---
title: Adding Algolia to Rails
date: "2019-08-07T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to add search to ruby on rails using Algolia which will simply search queries and speed up search results.
---
Only twice in my career, I was amazed with how simple integrating with a third party library.
Algolia has done an amazing job with their gem.

To get started run:
```
gem install algoliasearch-rails
```

I personal use `dotenv` gem to store my secrets.
Add algolia app id and api key to `.env` file:

```
ALGOLIA_SEARCH_APP_ID=XXXXXXXXXX
ALGOLIA_SEARCH_API_KEY=XXXXXXXXX
```

Add the following file to `config/initializers/algolia.rb`.
```ruby
# config/initializers/algolia.rb
AlgoliaSearch.configuration = {
  application_id: ENV['ALGOLIA_SEARCH_APP_ID'],
  api_key: ENV['ALGOLIA_SEARCH_API_KEY'],
  connect_timeout: 2,
  receive_timeout: 30,
  send_timeout: 30,
  batch_timeout: 120,
  search_timeout: 5
}
```

I personally am not a fan of sending all of your data to algolia, so recommend sending the attributes you need.
To add algolia to your user model do the following:
```ruby
class User < ApplicationRecord
  include AlgoliaSearch

  algoliasearch do
    attributes :id, :first_name, :last_name, :email
    searchableAttributes [:first_name, :last_name, :email]
  end
end
```

Run the following command in rails console to reindex all of your users in algolia.
```ruby
User.reindex!
```

Run the following command to search:
``ruby
User.algolia_search('kevin')
```

If you have a lot of data, you will need paginate.
To do this you need to update `config/initializers/algolia.rb` to specify: `kaminari` or `will_paginate`

```
# config/initializers/algolia.rb
pagination_backend: :kaminari,
```
OR
```
# config/initializers/algolia.rb
pagination_backend: :will_paginate,
```

Now add pagination to your search, change your algolia search to include `hitsPerPage` and `page`.
```ruby
User.algolia_search('kevin', hitsPerPage: 2, page: 1)
```

There you go.
A simple crash course on alogia.
If you need more details about alogia rails gem check it out https://github.com/algolia/algoliasearch-rails
