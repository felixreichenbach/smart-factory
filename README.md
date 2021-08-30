# Smart-Factory
Fischertechnik factory Mongodb integration

Fischertechnik GitHub repo: <https://github.com/fischertechnik/txt_training_factory>


## MQTT Client Configuration

Start container with custom config file:
cd into the mqtt folder
```
docker run -it -p 1883:1883 -p 9001:9001 -v $(pwd)/mosquitto.conf:/mosquitto/config/mosquitto.conf eclipse-mosquitto
```


## Fischertechnik Factory Initial Setup

Official Manual:
<https://www.fischertechnik.de/-/media/fischertechnik/fite/service/elearning/lehren/lernfabrik/fabrik_2019_englisch_neu.ashx>

1. Reset TP-Link router by pushing the reset button for ~5sec
2. Connect to the TP-Link WIFI and open <http://tplinkwifi.net/>. Password on the TP-Link router.
3. Login with admin:admin
4. Switch "Operation Mode" to WISP
5. Configure "Wireless" settings to connect to your regular (internet connectivity) WLAN
6. Add port forwarding for SSH to not have to switch WLAN if you want to access the TXT via SSH


## TXT MQTT Bridge Configuration

<https://github.com/fischertechnik/txt_training_factory/blob/master/TxtSmartFactoryLib/doc/MqttInterface.md>

Mosquitto configuration manual: <https://mosquitto.org/man/mosquitto-conf-5.html>

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

<https://github.com/fischertechnik/txt_training_factory/tree/master/Node-RED>

```
docker run -it -p 1880:1880 -v node_red_data:/data --name mynodered nodered/node-red
```

Access the dashboard <http://127.0.0.1:1880/>.
