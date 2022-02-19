---
title: Paginate two different tables in rails
date: "2020-11-22T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to paginate two different tables in rails
---

Sometimes when your developing, you have to do something that seems so wrong, but do to a deadline or for some other reason are left with no options...
This is an example of this.

Here is how to paginate two different tables in rails:

```ruby
page = 1
per_page = 25

fetch_example_time_and_ids = Example.select("`id`, `created_at`, '#{Example.name}' AS kind")
fetch_other_example_time_and_ids = OtherExample.select("`id`, `created_at`, '#{OtherExample.name}' AS kind")
sub_query = fetch_example_time_and_ids.union(fetch_other_example_time_and_ids)

union_examples = Example.select('*').from(sub_query, 't').order("`t`.`created_at` ASC").paginate(page: page, per_page: per_page)

example_ids = union_examples.to_a.inject({ Example.name => [], OtherExample.name => []}) do |results, union_example|
  results[union_example[:kind]].push union_example.id
  results
end

self.examples = Example.where(id: example_ids[Example.name]).full_context.order("`created_at` ASC") if example_ids[Example.name].present?
self.other_examples = OtherExample.where(id: example_ids[OtherExample.name]).order("`created_at` ASC") if example_ids[OtherExample.name].present?
```
