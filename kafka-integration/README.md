
Run the integration:
docker-compose up -d --build



Connector Status:
curl -s "http://localhost:8083/connectors?expand=info&expand=status"


RPK Cluster Info:
rpk cluster info --brokers 127.0.0.1:9093  


RPK Topic List:
rpk topic list --brokers 127.0.0.1:9093

Create License Topic:
rpk topic create -p 1 -r 1 _confluent-command --brokers 127.0.0.1:9093


Configure MongoDB Sink:
curl --silent -X POST -H "Content-Type: application/json" -d @mongodb-sink.json  http://localhost:8083/connectors


Configure MQTT Source:
curl --silent -X POST -H "Content-Type: application/json" -d @mqtt-source.json  http://localhost:8083/connectors 


Delete Connector:
curl -X DELETE http://localhost:8083/connectors/mqtt-source



$ echo '{"name": "Red", "website": "vectorized.io"}' | rpk topic produce mqtt-source --key record-key -H header-key:header-value

Reading message... Press CTRL + D to send, CTRL + C to cancel.
Sent record to partition 0 at offset 1 with timestamp 2020-10-07 18:29:08.481278811 +0000 UTC m=+0.248046468.



Topic Consume:
rpk topic consume activity --brokers 127.0.0.1:9093