import React from "react";
import serviceImg from "../../assets/images/service_images.png";
import serviceIcon from "../../assets/icon/icon_checklist.svg";
import ListService from "./ListService";

function Services() {
  return (
    <div className="grid md:grid-cols-2 py-10 gap-5">
      <div className="w-full flex justify-center">
        <img
          src={serviceImg}
          alt=""
          className="px-10"
          width={459}
          height={428}
        />
      </div>
      <div className="flex flex-col gap-5 justify-center xl:px-16 px-5">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Best Car Rental for any kind of trip in Makassar
        </h1>
        <p>
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>
        <ul className="grid gap-2">
          <ListService description="Sewa Mobil Dengan Supir di Makassar 12 Jam" />
          <ListService description="Sewa Mobil Lepas Kunci di Makassar 24 Jam" />
          <ListService description="Sewa Mobil Jangka Panjang Bulanan" />
          <ListService description="Gratis Antar - Jemput Mobil di Bandara" />
          <ListService description="Layanan Airport Transfer / Drop In Out" />
        </ul>
      </div>
    </div>
  );
}

export default Services;
