/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import bgImg from "../../../../../public/Assets/home/featured.jpg";
import bgImg1 from "../../../../../public/Assets/home/featured.jpg";
import HeadingTitle from "../../../../components/shared/HeadingTitle/HeadingTitle";

const FromOurMenu = () => {
  return (
    <div className="hero py-10">
      <img className="h-[800px] w-full object-cover" src={bgImg} />
      <div className="hero-overlay bg-opacity-60 mb-10">
        <HeadingTitle
          mainHeading="FROM OUR MENU"
          subHeading="Check it out"
        ></HeadingTitle>
      </div>

      <div className="md:flex items-center justify-center mt-10 gap-5 text-white">
        <div className="md:w-1/3 w-full mx-5">
          <img className="md:w-full w-11/12 mt-20" src={bgImg1} alt="" />
        </div>
        <div className="md:w-1/3 w-full mx-5">
          <h2 className="text-xl mt-5">March 20, 2023</h2>
          <h2 className="text-2xl mb-5">WHERE CAN I GET SOME?</h2>
          <p className="mr-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetu.
          </p>
          <div className=" mt-10">
            
          <Link to={'/order'}>
          <button className="btn btn-outline border-0 border-b-4 text-center">
            View Full Menu
          </button>
        </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromOurMenu;
