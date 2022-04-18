import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.init";
import Loading from "../Shared/Loading/Loading";
import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading || sending) {
    return <Loading />;
  }
  const navigateToRegister = () => {
    navigate("/register");
  };
  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert("Sent email");
  };

  return (
    <div>
      <h1 className="text-3xl mt-10 mb-5 font-mono text-cyan-800">Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          ref={emailRef}
          type="email"
          name="email"
          id=""
          placeholder="email address"
          required
        />
        <input
          ref={passwordRef}
          type="password"
          name="password"
          id=""
          placeholder="enter password"
          required
        />
        {/* <input type='checkbox' name="terms" id="terms" />
        <label htmlFor="terms">Accept Photography terms and Condition</label>  */}
        <input className="login-button" type="submit" value="Login" />
        <p className="transformer">
          New in Photography?{" "}
          <Link
            to="/register"
            className="register"
            onClick={navigateToRegister}
          >
            Please register
          </Link>{" "}
        </p>
        <p className="transformer">
          forget password?{" "}
          <button className="resetPass text-rose-400" onClick={handleResetPassword}>
            reset password
          </button>
        </p>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Login;
