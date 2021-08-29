# smart-factory
Fischertechnik factory Mongodb integration

## MQTT Client Configuration

Start container with custom config file:
cd into the mqtt folder
docker run -it -p 1883:1883 -p 9001:9001 -v $(pwd)/mosquitto.conf:/mosquitto/config/mosquitto.conf eclipse-mosquitto


## MQTT Broker (Fischertechnik) Configuration

```
connection ft-txt-bridge-cloud
address 192.168.1.113:1883
#bridge_capath /etc/ssl/certs
notifications false
cleansession false #on connection dropping
#remote_username 6875
#remote_password 4!4?P4mTVop6bZ
local_username txt
local_password xtx
topic i/# both 1 "" /j1/txt/6875/
topic o/# both 1 "" /j1/txt/6875/
topic c/# both 1 "" /j1/txt/6875/
topic f/# both 1 "" /j1/txt/6875/
try_private false
bridge_attempt_unsubscribe false
```

## Node-RED Dashboard
WIP
