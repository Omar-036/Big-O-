import Header from "../components/Header";
import Slider from "../components/Slider";

function Homepage() {
  return (
    <div className="">
      <Header />
      <Slider autoplay={true} loop={true} height={"60vh"} />
    </div>
  );
}

export default Homepage;
