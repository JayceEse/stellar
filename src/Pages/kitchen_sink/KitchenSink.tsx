import React from "react";
import { CoralIsland, CrystalCaves, HomeImg } from "../../assets";

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

const KitchenSink = () => {
  return (
    <>
      <div style={imgSlide}>image</div>
    </>
  );
};

export default KitchenSink;
