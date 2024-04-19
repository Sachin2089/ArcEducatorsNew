import React, { useState } from "react";
import "../fonts/stylesheet.css";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { SparklesCore } from "../ui/sparkles";
import { BackgroundBeams } from "../ui/background-beams";
import BG from "../assets/Bg.jpg";
import { IoCalendarOutline } from "react-icons/io5";
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0F]">
      <div className=" min-h-screen">
        <div className="w-full absolute inset-0 h-screen flex items-center justify-center z-1">
          <h1 className="absolute t-[50%] text-[144px] Grotesk-Black">
            ARC EDUCATORS
          </h1>
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.4}
            maxSize={0.9}
            particleDensity={30}
            className="w-full h-full"
            particleColor="#cecec5"
          />
          <BackgroundBeams />
        </div>
      </div>
      <div className=" min-h-screen flex flex-col justify-center items-start py-24 xl:px-[220px] lg:px-[150px] md:px-[80px] sm:px-[10px] bg-[#0B0B0F]">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="Grotesk-Black text-[54px] text-white">
            Observe. Make. Learn.
          </h1>
          <p className="text-2xl Grotesk-Normal text-center text-neutral-400 mb-24 px-96">
            Embark on a celestial journey with ARC Educators. Our team brings
            innovative teaching methods to nurture young astronomers. Join us in
            shaping a vibrant community of stargazers and exploring the wonders
            of the universe together.
          </p>
        </div>
        <div className="w-full flex item-start justify-center">
          <img
            className=" border-white border-4 rounded-[7px] h-[720px] w-[1280px]"
            src={BG}
          ></img>
        </div>
        <div className="w-full h-[300px] my-8 flex items-center justify-center gap-10">
          <div className="h-[200px] w-[400px] border border-[#333333] bg-[#1c1d22] rounded-[10px] flex flex-col items-center justify-center">
            <h1 className="text-[60px] text-white my-2 Grotesk-Black flex items-center justify-center">
              8<span className="text-4xl ml-2">+</span>
            </h1>
            <h1 className="Grotesk-Normal text-neutral-300 text-2xl mb-2">
              Years Active
            </h1>
          </div>
          <div className="h-[200px] w-[400px] border border-[#333333] bg-[#1c1d22] rounded-[10px] flex flex-col items-center justify-center">
            <h1 className="text-[60px] text-white my-2 Grotesk-Black flex items-center justify-center">
              250<span className="text-4xl ml-2">+</span>
            </h1>
            <h1 className="Grotesk-Normal text-neutral-300 text-2xl mb-2">
              Astrocamps Organized
            </h1>
          </div>
          <div className="h-[200px] w-[400px] border border-[#333333] bg-[#1c1d22] rounded-[10px] flex flex-col items-center justify-center">
            <h1 className="text-[60px] text-white my-2 Grotesk-Black flex items-center justify-center">
              15000<span className="text-4xl ml-2">+</span>
            </h1>
            <h1 className="Grotesk-Normal text-neutral-300 text-2xl mb-2">
              Happy Participants
            </h1>
          </div>
        
        </div>
        <Testimonials/>
      </div>
    </div>
  );
}

export default Home;
