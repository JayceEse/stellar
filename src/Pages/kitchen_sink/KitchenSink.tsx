import { useState } from "react";
import { CoralIsland, CrystalCaves, HomeImg } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const KitchenSink = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Background images slide
  const data = [
    {
      img: HomeImg,
      label: "Go places you've dreamed of.",
      description:
        "Wafer dessert danish. Powder toffee cookie jelly beans bear claw jelly gingerbread halvah. and ",
      temp: "",
    },
    {
      img: CoralIsland,
      label: "The Coral Island",
      description: "The North Lake Iceland",
      temp: "-16 ° C Very cold",
    },
    {
      img: CrystalCaves,
      label: "The Crystal Caves",
      description: "The North Lake Iceland",
      temp: "-16 ° C Very cold",
    },
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
    backgroundImage: `url(${data[currentIndex].img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "auto",
    height: "100vh",
  };

  // Button styles
  const buttonStyle: string =
    "flex justify-center items-center rounded-full text-2xl w-14 h-14 bg-white cursor-pointer";

  const playButtonStyle: string =
    "font-openSan text-base text-white font-bold flex justify-between items-center w-auto h-11 cursor-pointer mr-16";

  const playIconStyle: string = "text-base p-4 mr-6 rounded-full bg-red-700";

  const moreInfoStyle: string =
    "font-openSan font-bold text-white text-sm border-2 border-white border-solid w-48 h-11";

  // Title & description styles
  const titleBaseClasses: string =
    "text-8xl font-noto text-white font-bold w-[600px] h-auto mb-20";

  const titleHomeClasses: string =
    "text-[150px] font-noto text-white font-bold w-[1300px] h-auto mb-8";

  const paraHomeClasses: string =
    "font-openSan text-2xl font-semibold text-white w-[810px] h-auto mb-11 mt-40";

  const paraBaseClasses: string =
    "font-openSan text-2xl font-semibold text-white w-40 h-14 mr-56";

  const wrapperHomeClass: string = "flex flex-row justify-between w-auto";

  const wrapperBaseClass: string = "flex flex-row w-auto";

  const containerHomeClass: string =
    "flex flex-col-reverse justify-between ml-36 mt-28 w-auto h-auto";

  const containerBaseClass: string = "ml-36 mt-40";

  return (
    <>
      <div
        style={imgSlide}
        className="flex flex-col justify-between duration-500 delay-75"
      >
        {/* Destination Info */}
        <div
          className={
            currentIndex === 0 ? containerHomeClass : containerBaseClass
          }
        >
          <div
            className={currentIndex === 0 ? titleHomeClasses : titleBaseClasses}
          >
            <h1>{data[currentIndex].label}</h1>
          </div>
          <div
            className={currentIndex === 0 ? wrapperHomeClass : wrapperBaseClass}
          >
            <p
              className={currentIndex === 0 ? paraHomeClasses : paraBaseClasses}
            >
              {data[currentIndex].description}
            </p>
            <p className="font-openSan text-sm font-normal text-white mt-10">
              {data[currentIndex].temp}
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between mx-36 mb-16">
          <div className="flex flex-row justify-between w-36">
            {/* Left Button */}
            <button className={buttonStyle} onClick={prevSlide}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            {/* Right Button */}
            <button className={buttonStyle} onClick={nextSlide}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          <div className="flex flex-row justify-between items-center">
            {/* Watch video button */}
            <button className={playButtonStyle}>
              <FontAwesomeIcon icon={faPlay} className={playIconStyle} />
              Watch the video
            </button>

            {/* More info button */}
            <button className={moreInfoStyle}>More Info</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default KitchenSink;
