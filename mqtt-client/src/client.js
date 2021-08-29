var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://localhost:1883')

client.on('connect', function () {
    console.log("connect")
    client.subscribe('presence', function (err) {
        if (!err) {
        client.publish('presence', 'Hello mqtt :-)')
        }
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
})