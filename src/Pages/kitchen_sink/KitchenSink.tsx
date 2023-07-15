import React from "react";
import { CoralIsland, CrystalCaves, HomeImg } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

// Background images slide
const data = [
  { img: HomeImg, alt: "Home Image" },
  { img: CoralIsland, alt: "Coral Island Image" },
  { img: CrystalCaves, alt: "Crystal Caves Image" },
];

interface ImgSlideStyle {
  backgroundImage: string;
  backgroundSize: string;
  backgroundRepeat: string;
  backgroundPosition: string;
  width: string;
  height: string;
}

const imgSlide: ImgSlideStyle = {
  backgroundImage: `url(${data[0].img})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "100vw",
  height: "100vh",
};

// Button styles
const buttonStyle: string =
  "flex justify-center items-center rounded-full text-base w-11 h-11 bg-white cursor-pointer";

const playButtonStyle: string =
  "flex justify-center items-center rounded-full text-base text-white w-11 h-11 bg-red-700 cursor-pointer";

const moreInfoStyle: string =
  "font-openSan font-normal text-white text-xs border-2 border-white border-solid w-40 h-9";

const KitchenSink = () => {
  return (
    <>
      <div style={imgSlide}>
        <div className="flex flex-row justify-between w-28">
          {/* Left Button */}
          <div className={buttonStyle}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          {/* Right Button */}
          <div className={buttonStyle}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        {/* Watch video button */}
        <div className="flex flex-row justify-between w-36 h-10">
          <div className={playButtonStyle}>
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <div className="flex items-center text-white text-xs font-normal">
            <p>Watch the video</p>
          </div>
        </div>

        {/* More info button */}
        <div>
          <button className={moreInfoStyle}>More Info</button>
        </div>
      </div>
    </>
  );
};

export default KitchenSink;
