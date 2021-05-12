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