import Moon from "../assets/destination/image-moon.webp";
import Mars from "../assets/destination/image-mars.webp";
import Europa from "../assets/destination/image-europa.webp";
import Titan from "../assets/destination/image-titan.webp";

import { useState } from "react";

const World = () => {
  const destinations = [
    {
      name: "MOON",
      img: Moon,
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "MARS",
      img: Mars,
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "EUROPA",
      img: Europa,
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "TITAN",
      img: Titan,
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ];

  const [world, setWorld] = useState(destinations[0]);
  const [isVisible, setIsVisible] = useState(true);

  // useEffect para activar la animación cuando el componente se monte

  const handleClick = (value) => {
    setIsVisible(false);

    setTimeout(() => {
      setWorld(value);
      setIsVisible(true);
    }, 200);
    //Buscar el texto en el array y devolver ese objeto que satisfaga la condicion que le pasemos
  };

  return (
    <div
      id="main"
      className="flex flex-col min-h-screen gap-y-2 p-6 md:p-10 lg:py-12 lg:px-0 items-center overflow-hidden"
    >
      <div id="content" className="flex flex-col gap-y-6 ">
        <div
          id="page title"
          className="flex flex-row gap-6 text-white justify-center lg:justify-start"
        >
          <div
            id="number"
            className=" font-BarlowCondensed font-bold text-gray-500 text-[16px] md:text-2xl lg:text-3xl self-start"
          >
            01
          </div>
          <div
            id="text"
            className="  font-BarlowCondensed  tracking-[2px] md:font-BarlowCondensed md:tracking-[4px] md:text-2xl lg:text-3xl text-white"
          >
            PICK YOUR DESTINATION
          </div>
        </div>
        <div
          id="content"
          className={`flex flex-col lg:flex-row gap-y-8 lg:gap-8  transition-opacity duration-500 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          } `}
        >
          <div
            id="image container"
            className="flex flex-row w-[327px] h-[203px] md:w-[688px] md:h-[384px] lg:w-[539px] lg:h-[734px] items-center justify-center "
          >
            <div
              id="image"
              className="flex w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[480px] lg:h-[480px] "
            >
              <img src={world.img} alt={world.name} />
            </div>
          </div>
          <div
            id="explanation"
            className="flex flex-col w-[327px] md:w-[688px] lg:w-[539px] gap-y-10 md:items-center lg:justify-center"
          >
            <div
              id="explanation2"
              className="flex flex-col md:w-[514px] lg:w-[445px] gap-y-10"
            >
              <div
                id="destinations-tabs"
                className="flex flex-row h-8 gap-8 self-center lg:self-start"
              >
                {destinations.map((value, index) => {
                  return (
                    <div
                      id="tab"
                      className={`flex flex-row font-BarlowCondensed text-4 tracking-[2px] text-white cursor-pointer border-b-4 ${
                        value.name === world.name
                          ? "border-white"
                          : "border-transparent"
                      } 
                      hover:border-gray-600
                      focus:border-white
                      active:border-white
                      focus:outline-none`}
                      key={index}
                      onClick={() => {
                        handleClick(value);
                      }}
                    >
                      {value.name}
                    </div>
                  );
                })}
              </div>
              <div
                id="text"
                className="flex flex-col gap-y-4 h-[215px] md:items-center lg:items-start lg:h-[254px]"
              >
                <div
                  id="1sttext"
                  className="font-Bellefair  text-white tracking-[0px] text-center lg:text-start text-6xl lg:text-8xl"
                >
                  {world.name}
                </div>
                <div
                  id="paragraph"
                  className="font-BarlowRegular text-blue-300 text-center lg:text-start"
                >
                  {world.description}
                </div>
              </div>
              <div
                id="lineSeparator"
                className="flex-grow h-[1px] bg-slate-700 z-10"
              ></div>
              <div
                id="statistics"
                className="flex flex-col md:flex-row gap-6 items-center md:justify-center lg:justify-start lg:gap-10"
              >
                <div id="distance" className="flex flex-col gap-y-3 ">
                  <div
                    id="text"
                    className="font-BarlowCondensed  text-blue-300 tracking-[2px]"
                  >
                    AVG. DISTANCE
                  </div>
                  <div
                    id="number"
                    className="font-Bellefair  text-white text-center lg:text-start text-xl"
                  >
                    {world.distance.toUpperCase()}
                  </div>
                </div>
                <div id="travel" className="flex flex-col gap-y-3 ">
                  <div
                    id="text"
                    className="font-BarlowCondensed  text-blue-300 tracking-[2px]"
                  >
                    EST. TRAVEL TIME
                  </div>
                  <div
                    id="number"
                    className="font-Bellefair  text-white text-center lg:text-start text-xl"
                  >
                    {world.travel.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default World;
