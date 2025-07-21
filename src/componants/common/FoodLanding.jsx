import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaShoppingBasket, FaStar, FaClock } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

import bgimg1 from "../../assets/images/background food black.avif";
import bgimg2 from "../../assets/images/menu-item-4.png";
import bgimg3 from "../../assets/images/menu-item-3.png";
import bgimg4 from "../../assets/images/menu-item-1.png";
import bgimg5 from "../../assets/images/salad.jpg";

const FoodLanding = () => {
  const navlinks = [
    { title: "home", href: "#home" },
    { title: "menu", href: "#menu" },
    { title: "service", href: "#service" },
    { title: "shop", href: "#shop" },
  ];

  const slides = [{ img: bgimg2 }, { img: bgimg3 }, { img: bgimg4 }];
  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full min-h-screen bg-gray-300 flex justify-center items-center relative overflow-hidden">
      <div className="w-full max-w-[1200px] h-auto md:h-[600px] bg-white shadow-2xl rounded-2xl flex flex-col px-4 md:px-8 py-6 relative overflow-hidden">
        <div
          className="absolute -top-25 right-10 translate-x-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gray-400 rounded-full z-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${bgimg1})` }}
        ></div>

        <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-4">
          <h1 className="text-2xl font-bold flex items-center">
            f
            <span className="text-red-500">u</span>
            d
            <span className="text-orange-400">o</span>
          </h1>

          <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
            {navlinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="capitalize text-gray-600 hover:text-black cursor-pointer"
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="flex gap-4 md:gap-6 items-center">
            <HiMagnifyingGlass className="text-2xl cursor-pointer" />
            <FaShoppingBasket className="text-2xl cursor-pointer" />
          </div>

          <div className="flex gap-2 md:gap-4 flex-wrap justify-center">
            <button className="px-4 md:px-6 py-2 border-1 font-light cursor-pointer hover:bg-black hover:text-white outline-none text-white rounded capitalize bg-black md:bg-transparent">
              login
            </button>
            <button className="px-4 md:px-6 py-2 bg-yellow-400 text-black rounded capitalize">
              signin
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative mt-10 overflow-hidden">
          <div className="flex flex-col gap-4 px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800">Order your</h2>
            <h2 className="text-2xl md:text-4xl font-semibold text-black">Favourite Foods</h2>
            <p className="font-light text-gray-700 text-sm md:text-base">
              Fresh and tasty seafood curry sit amet, consectetur curabitur
              accumsan auctor pulvinar proin{" "}
              <span className="text-black font-semibold">sit amet</span>.
            </p>
            <h1 className="text-lg md:text-xl font-light text-gray-600">
              Total Order: <span className="text-black font-extrabold">$24.30</span>
            </h1>

            <div className="flex gap-2 md:gap-4 flex-wrap">
              <button className="flex items-center gap-2 px-4 md:px-6 py-2 rounded-3xl cursor-pointer text-black font-semibold border border-black w-max">
                <span className="w-px h-4 bg-black"></span>
                <span>2</span>
                <span className="w-px h-4 bg-black"></span>
              </button>

              <button className="flex items-center gap-2 md:gap-4 bg-black px-4 md:px-6 py-2 rounded-3xl cursor-pointer text-white font-semibold hover:bg-gray-800 w-max">
                <FaShoppingBasket className="text-xl md:text-2xl bg-yellow-100 text-black rounded-2xl p-1" />
                Buy Now
              </button>
            </div>

            <div className="w-full max-w-[350px] h-[150px] md:h-[200px] rounded-2xl bg-gray-100 flex justify-between items-center shadow-lg mt-4 overflow-hidden relative px-2">
              <MdOutlineKeyboardArrowLeft
                onClick={prevSlide}
                className="text-xl text-black bg-white rounded-2xl shadow-2xl cursor-pointer drop-shadow-md"
              />

              <img src={slides[slide].img} alt="slide" className="h-full object-contain" />

              <MdOutlineKeyboardArrowRight
                onClick={nextSlide}
                className="text-xl text-black bg-white rounded-2xl shadow-2xl cursor-pointer drop-shadow-md"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 relative z-10">
            <div className="relative w-64 md:w-80 h-[350px] md:h-[420px] flex flex-col items-center justify-end">
              <div className="w-40 md:w-48 h-56 md:h-64 bg-orange-400 rounded-xl shadow-xl flex flex-col items-center justify-center px-4 py-4 gap-3 text-white relative z-0">
                <div className="flex items-center mt-16 md:mt-20 gap-2">
                  <h2 className="text-lg md:text-xl font-semibold">Salad</h2>
                  <FaStar className="text-white" />
                  <span className="text-base md:text-lg font-semibold">4.7</span>
                </div>

                <button className="flex items-center gap-2 px-4 py-2 mt-2 bg-black rounded-full text-white text-xs md:text-sm hover:bg-gray-800">
                  <FaClock /> <span>10-18 mins</span>
                </button>
              </div>

              <div className="absolute -top-10 w-64 md:w-80 h-64 md:h-80 rounded-full overflow-hidden shadow-2xl z-10">
                <img src={bgimg5} alt="food" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodLanding;
