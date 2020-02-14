---
title: Database Rules
date: "2020-02-14T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#2B74BA', icon: 'database' }
description: A list of database rules I use when writing code
---

Here is a list of rules I use when writing database queries.
This is a not a complete list. I will be adding more to it as I learn or remember other rules

* Make sure you index columns that need to be queried by
* Make sure you query only return the data you need, instead of returning everything.
* If your importing alot of data, make sure you are doing it in batches.
* If your doing statistics, or data sync with 3rd party service make sure you use a read replica.
* Avoid n + 1 queries! For rails, I use bullet and have it run in my CI/CD.
* Avoid doing search queries on that database (`SELECT "users".* FROM "users" WHERE (email like '%example%')`), instead use elasticache or algolia.
* Use a cache layer where needed
* Use tools like Data Dog or New Relic to find issues why your queries
