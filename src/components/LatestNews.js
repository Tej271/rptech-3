import React, { useEffect } from "react";
import RBI from "../assets/thumbnail-2.jpg";
import Tech from "../assets/device.jpg";
import Mountain from "../assets/mountain.jpg";
import People from "../assets/people.jpg";
import WallE from "../assets/wall-e.jpg";
import Nano from "../assets/thumbnail-3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function MediaNews() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      style={{
        backgroundColor: `#000`,
        height: "700px",
      }}
    >
      <div>
        <h2 className="text-3xl text-left w-[80%] ml-[12%] bg-gradient-to-r from-[#ED0088] via-[#A400F0] to-[#ED0088] bg-clip-text font-semibold italic text-transparent text-5sxl pt-10">
          Latest News
        </h2>
      </div>
      <div className="flex flex-row text-white ml-[10%]" data-aos="fade-left">
        {[
          {
            heading:
              "RedPhantom Capital - Optimistic about rapid growth, digital endeavours, new tactics and new offers",
            description:
              "India financial sector is growing rapidly with both existing firms and new companies. The industry includes commerical banks, insurance businesses, non banking financial companies, co-ops pension funds, mutual funds and other small entities.",
            image: RBI,
          },
          {
            heading: "Innovative Rivalry - In World",
            description:
              "Innovation is the art of imagination, or a new way of doing something, or even a new way of thinking. The 8 essential aspects of innovation are - Aspire, Choose, Discover, Evolve, Accelerate, Scale, Extend, and Mobilize. It is about starting something new, small ventures, a new enterprise",
            image: Tech,
          },
          {
            heading:
              "I believe RedPhantom will definitely leads young people towards the better world. - Mr. Sudhakar Rupnar(Founder)",
            description:
              "On the occassion of company opening, the Founder said that we can acheive our customers dreams",
            image: Mountain,
          },
        ].map((news) => (
          <div className="flex flex-col w-[25%] text-left p-[1%]">
            <img src={news.image} alt="rbi-pic" />
            <h2 className="text-3xl font-semibold mt-4">{news.heading}</h2>
            <p className="text-xs mt-4">{news.description}</p>
          </div>
        ))}
        <div className="flex flex-col items-center w-[25%]">
          <div className="w-[200px] h-[150px] overflow-hidden pb-[15%] mt-10">
            <img src={WallE} alt="rbi-pic" width="90%" />
          </div>
          <div className="w-[200px] h-[150px] overflow-hidden mt-10">
            <img src={People} alt="rbi-pic" />
          </div>

          <div className="w-[200px] h-[200px] overflow-hidden mt-10">
            <img src={Nano} alt="rbi-pic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaNews;
