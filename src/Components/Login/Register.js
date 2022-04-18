import React, { useRef } from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.init";
import Loading from "../Shared/Loading/Loading";
import './Register.css';


const Register = () => {
  const navigate = useNavigate();
  const emailRef = useRef('');
  const passRef = useRef('');
  const nameRef = useRef('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});


  const handleRegister = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value; 
    const password = passRef.current.value;
    createUserWithEmailAndPassword(email, password);

  }
  
  const navigateToLogin = () => {
    navigate('/login')
  }
  if (user) {
    navigate('/')
  }
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <h2 className="text-3xl mt-10 mb-5 text-cyan-800">Register Form</h2>

      <form className="register-form" onSubmit={handleRegister}>
        <input type="text" ref={nameRef} name="name" id="" placeholder="your name" required />

        <input type="email" ref={emailRef} name="email" id="" placeholder="email" required />

        <input
          ref={passRef}
          type="password"
          name="password"
          id=""
          placeholder="password"
          required
              />
              <p className="transformer">You Have an account? <Link to="/login" className="login" onClick={navigateToLogin}>Please Login</Link></p>

       <input type='submit' value='sign up' className="register-button" />
      </form>
    </div>
  );
};

export default Register;
