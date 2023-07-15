import background from "../../assets/CoralIsland.png";

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
      <section style={bgClass}>
        <div className="flex flex-row justify-center text-white text-xs font-normal">
          <p>
            Wafer dessert danish. Powder toffee cookie jelly beans bear claw
            jelly gingerbread halvah and
          </p>
        </div>
        <div>
          <h1>Go places you've dreamed of.</h1>
        </div>
        <div>
          <p>Watch the video</p>
        </div>
      </section>
    </>
  );
};

export default Home;
