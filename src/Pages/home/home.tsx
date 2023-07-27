import { useState } from "react";
import { CoralIsland, CrystalCaves, HomeImg } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
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

  // Desination content styling
  const classStyles = [
    {
      titleHome:
        "lg:text-[150px] md:text-9xl sm:text-8xl text-6xl font-noto text-white font-bold max-w-7xl h-auto mb-8",
      titleBase:
        "lg:text-8xl text-6xl font-noto text-white font-bold max-w-xl h-auto mb-20",
    },
    {
      paraHome:
        "font-openSan md:text-2xl text-lg font-semibold text-white max-w-4xl h-auto mb-11 mt-40",
      paraBase:
        "font-openSan text-2xl font-semibold text-white w-40 h-14 lg:mr-56 mr-20",
    },
    {
      wrapperHome: "flex-row justify-between w-auto",
      wrapperBase: "flex sm:flex-row flex-col w-auto",
    },
    {
      containerHome:
        "flex flex-col-reverse justify-between lg:ml-36 mx-12 mt-28 w-auto h-auto",
      containerBase: "lg:ml-36 mx-12 mt-40",
    },
  ];

  // Checking slide index and applying style
  const isHomeSlide = currentIndex === 0;

  const titleStyle = isHomeSlide
    ? classStyles[0].titleHome
    : classStyles[0].titleBase;

  const paraStyle = isHomeSlide
    ? classStyles[1].paraHome
    : classStyles[1].paraBase;

  const wrapperStyle = isHomeSlide
    ? classStyles[2].wrapperHome
    : classStyles[2].wrapperBase;

  const containerStyle = isHomeSlide
    ? classStyles[3].containerHome
    : classStyles[3].containerBase;

  // Button styles
  const buttonStyle: string =
    "flex justify-center items-center rounded-full text-2xl w-14 h-14 bg-white cursor-pointer";

  const playButtonStyle: string =
    "font-openSan text-base text-white font-bold flex flex-row items-center w-auto h-11 cursor-pointer sm:mr-16 mr-0";

  const playIconStyle: string = "text-base p-4 mr-6 rounded-full bg-red-700";

  const moreInfoStyle: string =
    "font-openSan font-bold text-white text-sm border-2 border-white border-solid w-48 h-11 sm:mt-0 mt-6";

  return (
    <>
      <div
        style={imgSlide}
        className="flex flex-col justify-between duration-500 delay-75"
      >
        {/* Destination Info */}
        <div className={containerStyle}>
          <div className={titleStyle}>
            <h1>{data[currentIndex].label}</h1>
          </div>
          <div className={wrapperStyle}>
            <p className={paraStyle}>{data[currentIndex].description}</p>
            <p className="font-openSan text-sm font-normal text-white mt-10">
              {data[currentIndex].temp}
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse md:justify-between items-center lg:mx-36 mx-12 mb-16">
          <div className="flex flex-row justify-between w-36 md:mt-0 mt-6">
            {/* Left Button */}
            <button className={buttonStyle} onClick={prevSlide}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            {/* Right Button */}
            <button className={buttonStyle} onClick={nextSlide}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          <div className="flex sm:flex-row flex-col items-center">
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

export default Home;
