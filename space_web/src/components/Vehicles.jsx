import launch from "../assets/technology/image-launch-vehicle-landscape.jpg";
import launchpor from "../assets/technology/image-launch-vehicle-portrait.jpg";
import space from "../assets/technology/image-space-capsule-landscape.jpg";
import spacepor from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceport from "../assets/technology/image-spaceport-landscape.jpg";
import spaceportpor from "../assets/technology/image-spaceport-portrait.jpg";

const Vehicles = () => {
  const techs = [
    {
      name: "Launch vehicle",
      images: {
        portrait: launchpor,
        landscape: launch,
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      images: {
        portrait: spacepor,
        landscape: space,
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space capsule",
      images: {
        portrait: spaceportpor,
        landscape: spaceport,
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];

  const trying = techs[0];

  return (
    <div
      id="main-content"
      className="w-full flex flex-col gap-y-2 p-6 pb-[48px] md:p-10 lg:px-0 lg:py-[48px]"
    >
      <div id="content" className="flex flex-col gap-y-6">
        <div
          id="page-title"
          className="flex flex-row gap-6 self-center items-center h-[19px] md:h-[24px] md:self-start "
        >
          <div
            id="number"
            className="font-BarlowCondensed font-bold text-gray-500 text-[16px] md:text-2xl lg:text-3xl"
          >
            03
          </div>
          <div
            id="text"
            className="font-BarlowCondensed tracking-[2px] md:font-BarlowCondensed md:tracking-[4px] md:text-2xl lg:text-3xl text-white"
          >
            SPACE LAUNCH 101
          </div>
        </div>
        <div
          id="content"
          className="flex flex-col lg:flex-row gap-y-8 lg:gap-8 "
        >
          <div
            id="image"
            className=" flex flex-row pt-[64px] lg:py-0 w-[327px] h-[322px] md:w-[688px] md:h-[421px] lg:w-[608px] lg:h-[734px] "
          >
            <img src={launch} alt="" />
          </div>
          <div
            id="pagination&explanation"
            className="flex flex-col lg:flex-row lg:gap-[64px] lg:self-start gap-y-10 items-center"
          >
            <div
              id="three-dots"
              className="flex flex-row gap-4 items-center lg:flex-col lg:gap-y-8"
            >
              <div
                id="dot"
                className="flex w-[40px] h-[40px] md:w-[56px] md:h-[56px] lg:w-[80px] lg:h-[80px] rounded-full bg-transparent text-center text-white border border-gray-600 items-center justify-center font-Bellefair lg:text-xl"
              >
                1
              </div>
              <div
                id="dot"
                className="flex w-[40px] h-[40px] md:w-[56px] md:h-[56px] lg:w-[80px] lg:h-[80px] rounded-full bg-transparent text-center text-white border border-gray-600 items-center justify-center font-Bellefair lg:text-xl"
              >
                2
              </div>
              <div
                id="dot"
                className="flex w-[40px] h-[40px] md:w-[56px] md:h-[56px] lg:w-[80px] lg:h-[80px] rounded-full bg-transparent text-center text-white border border-gray-600 items-center justify-center font-Bellefair lg:text-xl"
              >
                3
              </div>
            </div>
            <div id="expl3" className="flex flex-col gap-y-6">
              <div id="rankName" className="flex flex-col gap-y-2 md:gap-y-6">
                <div
                  id="rank"
                  className="h-[21px] text-center md:h-[28px] lg:h-[37px] font-Bellefair text-gray-500  md:text-4xl lg:text-4xl lg:self-start"
                >THE TERMINOLOGY...</div>
                <div
                  id="name"
                  className="h-[28px] text-center md:h-[46px] font-Bellefair text-white text-2xl md:text-5xl justify-center lg:self-start"
                >{trying.name.toUpperCase()}</div>
              </div>
              <div
                id="description"
                className="font-BarlowRegular text-blue-200 text-center lg:text-start md:w-[512px] self-center"
              >{trying.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
