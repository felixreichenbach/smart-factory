# Smart-Factory: Node-RED Container (WIP)
Automaticall install modules:
https://nodered.org/docs/user-guide/runtime/adding-nodes

Automatically import flow configuration:
https://nodered.org/docs/api/admin/methods/post/flows/


## Node-RED Dashboard

<https://github.com/fischertechnik/txt_training_factory/tree/master/Node-RED>

```
docker run -it -p 1880:1880 -v node_red_data:/data --name mynodered nodered/node-red
```

1. Access the dashboard <http://127.0.0.1:1880/>
2. Install "node-red-dashboards" -> "Menu"/"Manage palette"
![Node-Red-Dashboards](/doc/images/node-red-dashboard.png)
3. Import "flows.json"
3. Verify/change MQTT broker IP address "Menu"/"Configuration nodes"
4. Deploy and open dashboard <http://127.0.0.1:1880/ui/>
5. If the camera doesn't sent pictures, go to the "Lernfabrik4.0 - conf" flow and hit the activate camera button
