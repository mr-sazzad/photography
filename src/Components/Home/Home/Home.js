import React from "react";
import { Link } from "react-router-dom";
import photo from "../../../image/photo.jpg";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div className="">
      <div className="home-container flex flex-col sm:flex-row justify-between w-full pt-10 bg-green-100 mx-auto">
        <div className="left-side w-12/12 sm:w-6/12 pt-28 mx-auto">
          <p className="text-sm font-medium mb-3 small-title">i'am</p>
          <h3 className="text-2xl font-semibold">Sazzad Karim</h3>
          <p className="px-10 font-medium">
            i am a professional photographer and i have lot of experianses{" "}
            <br /> and i also like my work vary much if you want to hire me ok
          </p>
          <Link to='/about' className="rounded-full border-green-400 border-2 bg-green-400 px-2 mt-5 hover:bg-green-500 font-mono">
            Explore me
          </Link>
        </div>
        <div className="R-side pr-10 w-12/12 sm:w-6/12 mx-auto pb-5 sm:pb-0">
          <img className="rounded-md" src={photo} alt="" />
        </div>
      </div>
     <Services />
    </div>
  );
};

export default Home;
