import About from "./About/About";
import Explore from "./Explore/Explore";
import GlobalPartners from "./GlobalPartners/GlobalPartners";
import Goal from "./Goal/Goal";

const Root = () => {
  return (
    <div>
      <About />
      <Goal />
      <Explore />
      <GlobalPartners></GlobalPartners>
    </div>
  );
};

export default Root;
