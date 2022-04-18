import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../Firebase/Firebase.init";
import camera from "../../../icon/camera.png";
import './Nav.css';

const Nav = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <nav className="flex flex-col justify-around  md:flex md:flex-row  px-14 md:justify-between items-center bg-cyan-700 h-20 md:h-16">
      <div className="flex row justify-center items-center"><img className="header-icon" src={camera} alt="" /> <h1  className="text-xl font-medium text-gray-800 web-name">photography</h1></div>
      <div>
        <ul className="flex justify-center items-center font-medium ">
          <li className="mr-5">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-5">
            <Link to="/services">services</Link>
          </li>
          <li className="mr-5">
            <Link to="/orders/:ordersId">orders</Link>
          </li>
          <li className="mr-5">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="mr-5">
            <Link to="/about">About</Link>
          </li>
          <li>
            {
              user? <Link to='/signOut' onClick={handleSignOut}>Sign Out</Link>
                :
                <Link to="/login">Login</Link>
            }
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
