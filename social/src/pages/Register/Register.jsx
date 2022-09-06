
import { GrFacebook } from "react-icons/gr";
import axios from 'axios';
import '../Login/Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import './Register.scss';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import React, { useState } from 'react'
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

  const navegate = useNavigate();

// stated for from fileds
  const [ input, setInput ] = useState({
        name : '',
        email : '',
        username : '',
        password : ''
  });

  // handle input
  const handleInput = (e) => {

    setInput((prev) => ({ ...prev, [e.target.name] : e.target.value}));

  }


  ///handleUserRegister user register 

  const handleUserRegister = async (e) => {
    e.preventDefault();

    try {

      if( !input.name || !input.email || !input.username || !input.password ){
        swal("Danger!", "All fiels are required!", "error");
      }else {

       await axios.post('http://localhost:5050/api/user/register', input)
       .then( res => {

        console.log(res);

        setInput((prev) => ({
          name : '',
          email : '',
          username : '',
          password : ''
        }));

        swal("Success!", "Your account created successfully !", "success");
        navegate('/login');
        
      }).catch(error => {
        console.log(error);
      });
        
      }
      
    } catch (error) {
      console.log(error);
      
    }


  }




  return (
    <div className='login-container'>
        <div className="login-wraper">
          <a className='login-logo-link' href="#"><img className='login-logo' src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" /></a>
          <span className="reg-text">Sign Up to see photos and videos from your friends</span>
          <a className='login-with-register' href="#"> <GrFacebook/> Login With Facebook </a>

          <div className="divider">
            OR
          </div>


          <form onSubmit={handleUserRegister}  className="login-from">

            <input name='email' onChange={ handleInput } type="text" className="login-input" value={ input.email } placeholder='Mobile number email' />
            <input name='name' onChange={ handleInput } type="text" className="login-input" value={ input.name }  placeholder='Full Name' />
            <input name='username' onChange={ handleInput } type="text" className="login-input" value={ input.username} placeholder='Username' />
            <input name='password' onChange={ handleInput } type="password" className="login-input" value={ input.password} placeholder='password' />

            <p className="res-from-text">People who use our service may have uploaded your contact information to instagram. <a href="#">Learn More</a></p>
            <p className="res-from-text">By singing up, you agree to our <a href="#">terms</a> , <a href="#"> <a href="#">privacy polici </a></a> and <a href="#">cookies policy</a> . </p>

            <button type='submit' className='login-submit'>Sign Up</button>
          </form>
          <a className='forgot-password' href="#"> Forgot Password? </a>
        </div>
        <div className="signup-wraper">
          <span className="singup-text"> Have an account? <Link to="/login" className="sign-up-link">Log In</Link></span>
        </div>
        <div className="get-app">
        <span className="app-text">Get the app.</span>
        <div className="app-logo">
            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" />
            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" />
            </div>
        </div>
        

        <AuthFooter/>
      </div>
  )
}

export default Register;