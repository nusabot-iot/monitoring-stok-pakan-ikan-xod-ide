# IoT Monitoring Stok Pakan Ikan Dengan XOD IDE

Prototype konsep IoT untuk alat monitoring stok pakan ikan bagi peternak menggunakan protokol MQTT dan XOD IDE.

Menggunakan ESP8266 sebagai microcontroller dan HC-SR04 sebagai sensor jarak untuk mendapatkan data pakan ikan yang tersisa. Data dikirim menggunakan protokol MQTT dan ditampilkan pada web page menggunakan Web Socket.

## Instalasi web page

1. Unduh melalui file release.

2. Buka berkas menggunakan web browser yang ada pada `webpage/index.html`

   ![image-20220317095437788](https://github.com/nusabot-iot/monitoring-stok-pakan-ikan-xod-ide/blob/main/webpage/Screenshot.png)

## Instalasi firmware

1. Buka berkas menggunakan XOD IDE yang ada pada `firmware/main.xodball`

2. Upload ke ESP8266 (dapat menggunakan development board seperti NodeMCU, Wemos, dsb)

3. Rakit komponen seperti berikut:

   ![image-20220317095437788](https://github.com/nusabot-iot/monitoring-stok-pakan-ikan-xod-ide/blob/main/firmware/Wiring.png)
   
## Penggunaan

Kamu bisa menambahkan sebanyak apapun gudang yang ingin dipantau. Bukan hanya gudang, masing-masing tempat pakan ikan pun bisa kamu pantau.

1. Buat widget melalui HTML dan atur `id` dari tiap widget.
2. Buat pengkondisian pada `mqtt.js` untuk masing-masing topic.
3. Buat kode program pada XOD untuk tiap alat dengan topic yang berbeda pada setiap tempat penyimpanan pakan ikan.

## Dibuat menggunakan

- [XOD](https://xod.io)
- [Nusabot MQTT for XOD](https://xod.io/libs/nusabotid/nusabot-mqtt/)
- [MQTT.JS](https://github.com/mqttjs)
- [AdminLTE](https://adminlte.io/)

## Berkontribusi

Proyek ini bersifat *open source* dimana kamu dapat berkontribusi. Apapun kontribusi kamu **sangat diapresiasi**.

Jika kamu memiliki kendala dalam penggunaan proyek ini ataupun memiliki usul fitur dalam proyek ini silahkan buat issue baru. Untuk melakukan kontribusi pada proyek ini silahkan lakukan:

1. Fork proyek ini
2. Buat Branch kamu (`git checkout -b fitur/AmazingFeature`)
3. Lakukan Commit atas perubahan yang sudah kamu lakukan (`git commit -m 'Menambahkan Fitur Penjinak Bom'`)
4. Push ke Branch (`git push origin fitur/AmazingFeature`)
5. Buat Pull Request

## Lisensi

Didistribusikan dibawah MIT Licence. Silahkan lihat [LICENCE](https://github.com/nusabot-iot/monitoring-stok-pakan-ikan-xod-ide/blob/main/LICENSE) untuk informasi lebih lanjut.

## Kontak

Nusabot - [halo@nusabot.id](mailto:halo@nusabot.id)
