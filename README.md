# Smart-Factory
Fischertechnik factory Mongodb integration

Fischertechnik GitHub repo: <https://github.com/fischertechnik/txt_training_factory>

## Fischertechnik Factory Initial Setup

Official Manual:
<https://www.fischertechnik.de/-/media/fischertechnik/fite/service/elearning/lehren/lernfabrik/fabrik_2019_englisch_neu.ashx>

1. Reset TP-Link router by pushing the reset button for ~5sec
2. Connect to the TP-Link WIFI and open <http://tplinkwifi.net/>. Password on the TP-Link router.
3. Login with admin:admin
4. Switch "Operation Mode" to WISP
![WISP Configuration](/doc/images/TP-Link-OperationMode.png)
5. Configure "Wireless" settings to connect to your regular (internet connectivity) WLAN
![WIFI Configuration](/doc/images/TP-Link-WIFISetup.png)
6. Add port forwarding for SSH and the MQTT broker for direct access without switching WLAN
![Port Forwarding](/doc/images/TP-Link-PortForward.png)


# MQTT Architecture and Setup
![Fischertechnik Network Overview](https://github.com/fischertechnik/txt_training_factory/blob/master/doc/Overview_Network.PNG)


## Remote MQTT Broker Configuration

The Fischertechnik factory has MQTT brokers deployed on their TXT controllers as shown on the diagram. By default the factory connects to the Fischercloud. We will run our own MQTT broker and afterwards use the bridge configuration on the main controller to receive/send messages from/to the main TXT MQTT controller.

The broker is started with a custom config file in the mqtt folder. 
You have to run the command from within the mqtt folder!

```
docker run -it -p 1883:1883 -p 9001:9001 -v $(pwd)/mosquitto.conf:/mosquitto/config/mosquitto.conf eclipse-mosquitto
```

## TXT MQTT Bridge Configuration

The factory contains 6 TXT controllers which communicate within eachother via MQTT. The SSC TXT controller is the main/central controller. The MQTT broker on this controller will be configured to forward/receive messages to the previously configured remote MQTT broker via the following MQTT bridge configuration.

The MQTT interface of the main controller is documented here:  
<https://github.com/fischertechnik/txt_training_factory/blob/master/TxtSmartFactoryLib/doc/MqttInterface.md>

The Mosquitto config file documentation is available here:  
<https://mosquitto.org/man/mosquitto-conf-5.html>

```
connection ft-txt-bridge-cloud
address www.fischertechnik-cloud.com:8883
bridge_capath /etc/ssl/certs
notifications false
cleansession false #on connection dropping
remote_username <FISCHERCLOUD MQTT USERNAME>
remote_password <FISCHERCLOUD MQTT PASSWORD>
local_username txt
local_password xtx
topic i/# both 1 "" /j1/txt/6875/
topic o/# in 1 "" /j1/txt/6875/
topic c/# both 1 "" /j1/txt/6875/
topic f/i/# out 1 "" /j1/txt/6875/
topic f/o/# in 1 "" /j1/txt/6875/
try_private false
bridge_attempt_unsubscribe false

connection remote-broker
address <YOUR REMOTE MQTT BROKER IP ADDRESS:PORT>
notifications false
cleansession true
#remote_username
#remote_password
local_username txt
local_password xtx
topic i/# out 1 "" ""
topic o/# in 1 "" ""
topic c/# out 1 "" ""
topic f/i/# out 1 "" ""
topic f/o/# in 1 "" ""
try_private true
bridge_attempt_unsubscribe false
```
## Start Edge Infrastructure

Change into the "Smart-Factory" directory.

```
docker-compose up
```

Connect to Node-RED dashboard:
<http://127.0.0.1:1880/>

Connect to Grafana dashboard:
<http://127.0.0.1:3000/>

Connect to MongoDB:
mongodb://mongodb:27017/data
