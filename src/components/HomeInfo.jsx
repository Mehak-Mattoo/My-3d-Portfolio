import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className="text-l sm:leading-snug text-center neo-brutalism-blue py-2 px-5 md:py-4 md:px-8 text-white mx-2 md:mx-5">
        Hi, I'm
        <span className="font-bold  m-2 text-white">Mehak Mattoo</span>
        <br />
        Your Partner in Digital Innovation
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-small sm:text-l text-center">
          Dive into my skillset <br />
          and see what I bring to the table
        </p>

        <Link to="/about" className=" neo-brutalism-white neo-btn">
          Learn more
          <img src={arrow} alt="arrow" className="w-2 h-2 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-small sm:text-l text-center">
          Explore my projects to see my work in action
        </p>

        <Link to="/projects" className=" neo-brutalism-white neo-btn">
          Learn more
          <img src={arrow} alt="arrow" className="w-2 h-2 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-small sm:text-l text-center">
          Got a project in mind or looking for a dev? <br /> Let’s connect and
          make it happen!
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
