import { useState } from "react";
import { Link } from "react-router-dom";

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
      className="flex flex-col p-6 md:px-10 md:py-[128px] lg:py-[128px] gap-y-2 items-center min-h-center"
    >
      <div id="hero" className="flex flex-row gap-[48px] ">
        <div
          id="inside-hero"
          className="flex flex-col lg:flex-row gap-y-[70px]"
        >
          {/**Textos */}
          <div
            id="texts"
            className="flex flex-col w-[327px] md:w-[512px] lg:w-[540px] gap-y-6"
          >
            <div
              id="travel"
              className="font-BarlowCondensed  text-blue-200 tracking-[4px]  text-xl md:text-2xl text-center lg:text-left "
            >
              SO, YOU WANT TO TRAVEL TO
            </div>
            <div
              id="space"
              className="font-Bellefair tracking-[0px] text-white text-center lg:text-left text-8xl md:text-8xl "
            >
              SPACE
            </div>
            <div
              id="letsFaceIt"
              className="font-BarlowRegular  tracking-[0px] text-blue-200 text-center lg:text-left "
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
            className="flex flex-col w-[327px] h-[382px] md:w-[512px] md:h-[272px] lg:w-[540px] lg:h-[271px] gap-y-6 items-center justify-center relative"
          >
            <Link
              to="/destination"
              id="explore"
              className="
              flex 
              flex-row 
              gap-2
              w-[144px]
              h-[144px]
              md:w-[272px] 
              md:h-[272px] 
              rounded-full 
              bg-white 
              items-center 
              justify-center
              cursor-pointer
                
              "
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
                text-lg
                md:text-3xl
                tracking-[0px]
                "
              >
                EXPLORE
              </div>
            </Link>
            <div
              id="hoverExplore"
              className={`absolute z-1 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-white opacity-15 cursor-pointer ${hidden}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
