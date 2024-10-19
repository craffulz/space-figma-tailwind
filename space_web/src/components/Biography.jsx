import anoush from "../assets/crew/image-anousheh-ansari.webp";
import douglas from "../assets/crew/image-douglas-hurley.webp";
import cark from "../assets/crew/image-mark-shuttleworth.webp";
import victor from "../assets/crew/image-victor-glover.webp";

import { useState } from "react";

const crew = [
  {
    name: "Douglas Hurley",
    img: douglas,
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    img: cark,
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    img: victor,
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    img: anoush,
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const Biography = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [data, setData] = useState(crew[0]);

  function handleDotClick(index, value) {
    setIsVisible(false);

    setTimeout(() => {
      setData(value);
      setIsVisible(true);
    }, 250);
  }

  const mark = data;

  return (
    <div
      id="main-content"
      className="w-full flex flex-col gap-y-2 p-6 pb-0 md:p-[48px] md:pb-0 lg:py-[48px] lg:px-[150px]  lg:items-center overflow-hidden"
    >
      <div id="content" className="flex flex-col gap-y-6 ">
        <div
          id="page-title"
          className="flex flex-row gap-6 text-white justify-center lg:justify-start"
        >
          <div
            id="number"
            className="font-BarlowCondensed font-bold text-gray-500 text-[16px] md:text-2xl lg:text-3xl"
          >
            02
          </div>
          <div
            id="text"
            className="font-BarlowCondensed tracking-[2px] md:font-BarlowCondensed md:tracking-[4px] md:text-2xl lg:text-3xl text-white"
          >
            MEET YOUR CREW
          </div>
        </div>
        <div
          id="true-content"
          className="flex flex-col gap-y-8 lg:flex-row  lg:gap-y-0 lg:gap-8 justify-center"
        >
          <div
            id="explanation"
            className={`flex flex-col gap-y-10 justify-between transition-opacity duration-700 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              id="explanation-true"
              className="flex flex-col gap-y-6 pt-10 h-[317px] lg:pt-0 lg:h-[631px] justify-center"
            >
              <div
                id="expl3"
                className="flex flex-col gap-y-6 md:h-[231px] lg:h-auto"
              >
                <div id="rankName" className="flex flex-col gap-y-2 md:gap-y-6">
                  <div
                    id="rank"
                    className="h-[21px] text-center md:h-[28px] lg:h-[37px] font-Bellefair text-gray-500  md:text-4xl lg:text-4xl lg:self-start"
                  >
                    {mark.role.toLocaleUpperCase()}
                  </div>
                  <div
                    id="name"
                    className="h-[28px] text-center md:h-[46px] lg:h-auto lg:text-start font-Bellefair text-white text-2xl md:text-5xl justify-center lg:self-start "
                  >
                    {mark.name.toUpperCase()}
                  </div>
                </div>
                <div
                  id="description"
                  className="font-BarlowRegular text-blue-200 text-center lg:text-start md:w-[512px] self-center"
                >
                  {mark.bio}
                </div>
              </div>
            </div>
            <div
              id="pagination"
              className="flex flex-col h-[10px] gap-y-2 lg:h-[64px] self-center lg:self-start"
            >
              <div id="dots" className="flex flex-row gap-4 lg:gap-10">
                {crew.map((value, index) => {
                  return (
                    <div
                      key={index}
                      id={value.name}
                      className={`h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] rounded-full ${
                        value.name === data.name ? "bg-white" : "bg-gray-600"
                      } hover:bg-gray-400 cursor-pointer`}
                      onClick={() => handleDotClick(index, value)}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
          <div id="image" className="flex flex-row justify-center">
            <div
              id="crew-image"
              className="flex lg:items-end  md:h-[560px] lg:w-[540px] lg:h-[676px] relative"
            >
              <img
                src={mark.img}
                alt={mark.name}
                className={`object-cover lg:object-contain transition-opacity duration-700 ease-in-out ${
              isVisible ? "opacity-100" : "opacity-0"}`}
              />
              <div
                id="mask"
                className="absolute bottom-[0px] md:bottom-[-0px] md:left-[0px] lg:bottom-0 lg:left-0 inset-0 bg-gradient-to-b from-transparent to-blueH pointer-events-none h-[90px] w-[550px] self-end"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
