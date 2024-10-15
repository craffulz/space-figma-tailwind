import { useState } from "react";

const Hero = () => {
  const [hidden, setHidden] = useState("hidden");
  function handleHover() {
    setHidden("");
  }
  function handleLeave() {
    setHidden("hidden");
  }
  return (
    <div
      id="main"
      className="flex flex-col p-6 lg:py-[128px] gap-y-2 items-center min-h-center"
    >
      <div id="hero" className="flex flex-row">
        <div id="inside-hero" className="flex flex-row">
          {/**Textos */}
          <div id="texts" className="flex flex-col w-[540px] gap-y-6">
            <div
              id="travel"
              className="font-BarlowCondensed text-[28px] text-blue-200 tracking-[4px] text-left"
            >
              SO, YOU WANT TO TRAVEL TO
            </div>
            <div
              id="space"
              className="font-Bellefair text-[100px] tracking-[0px] text-white text-left "
            >
              SPACE
            </div>
            <div
              id="letsFaceIt"
              className="font-BarlowRegular text-[18px] tracking-[0px] text-blue-200 text-left "
            >
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </div>
          </div>

          {/**Boton EXPLORE */}
          <div
            id="button"
            className="flex flex-row w-[540px] h-[271px] gap-y-6 justify-end relative"
          >
            <div
              id="explore"
              className=" 
              flex 
              flex-col 
              w-[272px] 
              h-[272px] 
              rounded-full 
              bg-white 
              items-center 
              justify-center
              cursor-pointer
              z-10"
              onMouseEnter={() => {
                handleHover();
              }}
              onMouseLeave={() => {
                handleLeave();
              }}
            >
              <div
                id="text"
                className="
                flex 
                w-[136px] 
                h-[37px] 
                text-blue-950  
                justify-center 
                items-center
                font-Bellefair
                text-[32px]
                tracking-[0px]
                "
              >
                EXPLORE
              </div>
            </div>
            <div
              id="hoverExplore"
              className={`absolute z-1 right-[-85px] top-[-85px] w-[444px] h-[444px] rounded-full bg-white opacity-15 cursor-pointer ${hidden}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
