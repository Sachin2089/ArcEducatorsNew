import React from "react";
import bg1 from "../assets/Astrophotography/01.jpg"
import bg2 from "../assets/Astrophotography/02.jpg"
import bg3 from "../assets/Astrophotography/03.jpg"
import bg4 from "../assets/Astrophotography/04.jpg"
import bg5 from "../assets/Astrophotography/05.jpg"
import bg6 from "../assets/Astrophotography/06.jpg"
import bg7 from "../assets/Astrophotography/07.jpg"
import bg8 from "../assets/Astrophotography/08.jpg"
import bg9 from "../assets/Astrophotography/09.jpg"
import bg10 from "../assets/Astrophotography/10.jpg"
import bg11 from "../assets/Astrophotography/11.jpg"
import bg12 from "../assets/Astrophotography/12.jpg"
import bg13 from "../assets/Astrophotography/13.jpg"

function Gallery() {
  return (
    <div className="min-h-screen xl:px-[220px] lg:px-[150px] md:px-[80px] sm:px-[10px] bg-[#0B0B0F] xl:py-40 lg:py-32 md:py-24 sm:py-4 flex items-center justify-center columns-3 flex-wrap gap-4">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="Grotesk-Black text-[54px] text-white">
          Explore the Cosmos
        </h1>
        <p className="text-2xl Grotesk-Normal text-center text-neutral-400 mb-24  px-96">
        Behold stunning images of captured celestial wonders.<br></br>Embark on a visual journey beyond the stars and discover<br></br> the magic of the night sky.
        </p>
      </div>
      <div className="w-full">
        <div className="columns-1 gap-4 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          <img className=" border-white border-4 rounded-[7px]" src= {bg1}></img>
          <img className=" border-white border-4 rounded-[7px]" src= {bg2}></img>
          <img className=" border-white border-4 rounded-[7px]" src = {bg3}></img>
          <img className=" border-white border-4 rounded-[7px]" src= {bg4}></img>
          <img className=" border-white border-4 rounded-[7px]" src= {bg5}></img>
          <img className=" border-white border-4 rounded-[7px]" src= {bg6}></img>
          <img className=" border-white border-4 rounded-[7px]" src= {bg7}></img>
          <img className=" border-white border-4 rounded-[7px]" src= {bg8}></img>
          <img className=" border-white border-4 rounded-[7px]" src= {bg9}></img>
          <img className=" border-white border-4 rounded-[7px]" src= {bg10}></img>
          <img className=" border-white border-4 rounded-[7px]" src= {bg11}></img>
          <img className=" border-white border-4 rounded-[7px]" src={bg12}></img>
          <img className=" border-white border-4 rounded-[7px]" src={bg13}></img>

        </div>
      </div>
    </div>
  );
}

export default Gallery;

