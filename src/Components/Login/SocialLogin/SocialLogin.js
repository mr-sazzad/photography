import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase/Firebase.init";
import google from "../../../icon/google.png";
import "./SocialLogin.css";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorMsg = "";
  if (error) {
    errorMsg = (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <div className="flex justify-center items-center">
        <span className="text-cyan-700">_____________________</span>
        <p className="mx-4 mt-3 text-cyan-700">or</p>
        <span className="text-cyan-700">______________________</span>
      </div>
      <div className="social-blog">
        <img
          onClick={() => signInWithGoogle()}
          className="mx-auto google-img"
          src={google}
          alt=""
        />
      </div>
      <p className="text-red-500">{errorMsg}</p>
    </div>
  );
};

export default SocialLogin;
