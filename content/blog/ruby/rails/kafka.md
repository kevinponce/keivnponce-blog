---
title: Kafka to Rails
date: "2021-01-07T22:12:00.121Z"
tags: ["ruby", "ruby-on-rails"]
header: { type: 'icon', bgColor: '#DE3F24', icon: 'ruby' }
description: How to Kafka in ruby on rails
---

```
brew install kafka
```

```
zookeeper-server-start /usr/local/etc/kafka/zookeeper.properties & kafka-server-start /usr/local/etc/kafka/server.properties
```

```ruby
require 'kafka'
class KafkaClient
  def self.client
    @client ||= Kafka.new(seed_brokers: ENV['KAFKA_BROKERS'])
  end
  
  def self.produce(data, topic:)
    client.producer.produce(data, topic: topic)
    client.producer.deliver_messages
end
```