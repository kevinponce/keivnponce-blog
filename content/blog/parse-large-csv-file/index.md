---
title: Parse Large CSV File
date: "2020-01-22T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to parse large csv file
---

Sometimes is rails, you have to do an import from a large csv file.
The largest csv file I had to read had a million lines...

As you could imagine, I ran into some memory issues on my worker.
So here is a some code that will allow you to read a large csv file.

```ruby
require 'csv'

def csv_each(file)
  open(file) do |csv|
    count = 0
      csv.each_line do |line|
        @headers ||= line.strip.split(',').map{|col| col.split(' ').join }

        if count != 0
          d = build_hash(line, @headers)

           yield({
            id: d['id'].downcase,
            name: d['name'],
          }, count)
        end

        count += 1
      end
    end
  end
end

def build_hash(line, headers)
  line.strip.split(',').each_with_index.reduce({}) do |result, (value, index)|
    result[headers[index]] = value

    result
  end
end

csv_each('example.csv') do |item|
  # TODO: do what ever you need with item object
end

```
