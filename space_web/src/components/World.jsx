import Moon from "../assets/destination/image-moon.webp";
import Mars from "../assets/destination/image-mars.webp";
import Europa from "../assets/destination/image-europa.webp";
import Titan from "../assets/destination/image-titan.webp";

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

  //const [moon, mars, europa, titan] = destinations;
  const moon = destinations[0];
  return (
    <div id="main" className="flex flex-col items-center gap-y-4 py-12">
      <div id="content" className="flex flex-col w-[1110px] gap-y-6 ">
        <div id="page title" className="flex flex-row gap-6 text-white">
          <div
            id="number"
            className="w-[26px] h-[34px] font-BarlowCondensed font-bold text-gray-500 text-[28px] tracking-[4.72px] self-start"
          >
            01
          </div>
          <div
            id="text"
            className=" h-[34px] font-BarlowCondensed text-[28px] tracking-[4px]"
          >
            PICK YOUR DESTINATION
          </div>
        </div>
        <div id="content" className="flex flex-row gap-8">
          <div
            id="image container"
            className="flex flex-row w-[539px] h-[734px] items-center justify-center "
          >
            <div id="image" className="flex w-[480px] h-[480px] ">
              <img src={moon.img} alt={moon.name} />
            </div>
          </div>
          <div id="explanation" className="flex flex-col w-[539px] gap-y-10 self-center">
            <div id="explanation2" className="flex flex-col w-[445px] gap-y-10">
              <div id="destinations-tabs" className="flex flex-row h-8 gap-8">
                {destinations.map(({ name }, index) => {
                  return (
                    <div
                      id="tab"
                      className="flex flex-row font-BarlowCondensed text-4 tracking-[2px] text-white cursor-pointer hover:border-b-[3px] border-white border-opacity-40"
                      key={index}
                    >
                      {name}
                    </div>
                  );
                })}
              </div>
              <div id="text" className="flex flex-col gap-y-4">
                <div
                  id="1sttext"
                  className="font-Bellefair text-[100px] text-white tracking-[0px]"
                >
                  MOON
                </div>
                <div
                  id="paragraph"
                  className="font-BarlowRegular text-[18px] text-blue-300"
                >
                  See our planet as you’ve never seen it before. A perfect
                  relaxing trip away to help regain perspective and come back
                  refreshed. While you’re there, take in some history by
                  visiting the Luna 2 and Apollo 11 landing sites.
                </div>
              </div>
              <div
                id="lineSeparator"
                className="flex-grow h-[1px] bg-slate-700 z-10"
              ></div>
              <div id="statistics" className="flex flex-row h-[61px] gap-6">
                <div id="distance" className="flex flex-col gap-y-3 ">
                  <div
                    id="text"
                    className="font-BarlowCondensed text-[16px] text-blue-300 tracking-[2px]"
                  >AVG. DISTANCE</div>
                  <div id="number" className="font-Bellefair text-[28px] text-white">384,400 KM</div>
                </div>
                <div id="travel" className="flex flex-col gap-y-3 ">
                  <div
                    id="text"
                    className="font-BarlowCondensed text-[16px] text-blue-300 tracking-[2px]"
                  >EST. TRAVEL TIME</div>
                  <div id="number" className="font-Bellefair text-[28px] text-white">3 DAYS</div>
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
