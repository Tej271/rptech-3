import React, { useEffect } from "react";
import NavBar from "./NavBar";
import image from "../assets/newspaper.jpg";
import { BsChevronDown } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

function MediaNews() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, transparent 0%, black 120%),linear-gradient(to right, transparent 0%, black 110%),url(${image})`,
        height: "740px",
      }}
    >
      <NavBar />
      <div
        className="w-[25%] text-right absolute left-[62%] top-[40%] animation"
        data-aos="zoom-in"
      >
        <button className="bg-black text-white border-[1.5px] border-[#70E3F2] px-5 mr-6">
          Media
        </button>
        <div className="border-r-4 pt-1 pr-2 mt-5">
          <h2 className="text-3xl bg-gradient-to-r from-[#ED0088] via-[#A400F0] to-[#ED0088] bg-clip-text font-semibold text-transparent text-5sxl">
            Media & News
          </h2>
          <h6 className="text-white">
            Get the latest news and feature stories on our business, community
            initiatives, heritage and people. Scroll to read
          </h6>
        </div>
      </div>
    </div>
  );
}

export default MediaNews;
