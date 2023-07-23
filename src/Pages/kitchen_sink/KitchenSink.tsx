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
    "flex justify-center items-center rounded-full text-base w-11 h-11 bg-white cursor-pointer";

  const playButtonStyle: string =
    "flex justify-center items-center rounded-full text-base text-white w-11 h-11 bg-red-700 cursor-pointer";

  const moreInfoStyle: string =
    "font-openSan font-bold text-white text-xs border-2 border-white border-solid w-40 h-9";

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
        className="flex flex-col justify-between duration-500 delay-75 mr-"
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
            <p className="flex fles-col items-end font-openSan text-sm font-normal text-white">
              {data[currentIndex].temp}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-row justify-between mx-36 mb-16">
          {/* Slide buttons */}
          <div>
            <div className="flex flex-row justify-between w-28">
              {/* Left Button */}
              <div className={buttonStyle} onClick={prevSlide}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              {/* Right Button */}
              <div className={buttonStyle} onClick={nextSlide}>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>

          {/* Watch and More Info button */}
          <div className="flex flex-row justify-between items-center w-96">
            {/* Watch video button */}
            <div className="flex flex-row justify-between w-40 h-10">
              <div className={playButtonStyle}>
                <FontAwesomeIcon icon={faPlay} />
              </div>
              <div className="flex items-center font-openSan font-bold text-white text-sm">
                <p>Watch the video</p>
              </div>
            </div>

            {/* More info button */}
            <div>
              <button className={moreInfoStyle}>More Info</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KitchenSink;
