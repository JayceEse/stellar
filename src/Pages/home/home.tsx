import background from "../../assets/homePage-bg.png";

const Home = () => {
  const bgClass = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };

  return (
    <>
      <div style={bgClass}></div>
    </>
  );
};

export default Home;
