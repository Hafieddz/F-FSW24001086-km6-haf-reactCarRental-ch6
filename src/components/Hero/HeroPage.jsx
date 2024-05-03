import React from "react";
import carImage from "../../assets/images/hero_car_images.png";

function HeroPage() {
  return (
    <div className="grid pt-14 bg-slate-200 gap-10 md:grid-cols-2 items-center mb-5">
      <div className="flex flex-col justify-center px-6 xl:px-10 gap-5 my-5">
        <h1 className="font-bold xl:text-4xl md:text-2xl text-4xl">
          Sewa & Rental Mobil Terbaik di kawasan Makassar
        </h1>
        <p className="md:text-sm xl:text-lg">
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </p>
        <button className="p-2 xl:p-3 bg-green-600 rounded-md font-semibold w-fit text-white text-sm">
          Mulai Sewa Mobil
        </button>
      </div>
      <img src={carImage} alt="" className="w-full" />
    </div>
  );
}

export default HeroPage;
