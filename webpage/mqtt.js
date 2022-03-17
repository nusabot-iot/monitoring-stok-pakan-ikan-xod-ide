const clientId = "mqttjs_" + Math.random().toString(16).substr(2, 8);

const host = "ws://public.mqtthq.com:8083/mqtt";

const options = {
  keepalive: 60,
  clientId: clientId,
  username: "",
  password: "",
  protocolId: "MQTT",
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,

  will: {
    topic: "nusabot/dissconnect",
    payload: "Perangkat gagal terhubung..!",
    qos: 0,
    retain: false,
  },
};

console.log("Menghubungkan ke broker");
const client = mqtt.connect(host, options);

client.subscribe("nusabot/pakanikan/+");

client.on("message", function (topic, payload) {
  if (topic == "nusabot/pakanikan/gudang1") {
    document.getElementById("gudang1").innerHTML = payload;
  }

  if (topic == "nusabot/pakanikan/gudang2") {
    document.getElementById("gudang2").innerHTML = payload;
  }

  if (topic == "nusabot/pakanikan/gudang3") {
    document.getElementById("gudang3").innerHTML = payload;
  }

  if (topic == "nusabot/pakanikan/gudang4") {
    document.getElementById("gudang4").innerHTML = payload;
  }

  if (topic == "nusabot/pakanikan/gudang5") {
    document.getElementById("gudang5").innerHTML = payload;
  }

  console.log([topic, payload].join(": "));
});

//sambungan terjalin
client.on("connect", () => {
  console.log("Terhubung:" + clientId);
  document.getElementById("status").innerHTML = "Terhubung";
  document.getElementById("status").style.color = "blue";
});

//sambungan terputus
client.on("disconnect", () => {
  console.log("Terputus");
  document.getElementById("status").innerHTML = "Terputus";
  document.getElementById("status").style.color = "red";
});