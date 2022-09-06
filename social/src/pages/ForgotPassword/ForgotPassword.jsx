import React, { useState } from 'react';
import img from '../ForgotPassword/maxresdefault.jpg'
import './ForgotPassword.scss'
import axios from 'axios';


const ForgotPassword = () => {

    // email state
    const [ email, setEmail ] = useState('');
    const [ msg, setMsg ] = useState({
        type : '',
        msg : '',
        status : false
    });


    // submit
    const handlePasswordRecover = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:5050/api/user/recover-password', { email })
        .then(res => {

          setMsg({
            type : 'success',
            msg : 'a password recovary link send',
            status : true
          });

        })
        .catch( error => {

          setMsg({
            type : 'danger',
            msg : 'Invalid Email or not exixts',
            status : true
          });

        });
    }


    

    

  return (


    <div className='login-container'>


        <div className="login-wraper">
          <a className='login-logo-link' href="#"><img className='login-logo' src={img} alt="" /></a>
          <h6>Trouble Logging in ?</h6>
          <h5>Enter your email, we'll send you a link to get back into your account</h5>

          { msg.status && <p className={ `alert alert-${msg.type}` }> {msg.msg} </p> }
          <form onSubmit={ handlePasswordRecover }  className="login-from" method='POST'>
            <div className="forgot_input">
            <input type="text" className="form-control" name='email' value={ email } onChange={ e => setEmail(e.target.value)} placeholder='Your Email' />
            </div>
            
            <div className="send_button">
            <button type='submit' className='btn btn-primary'>Send Link</button>
            </div>
          </form>

          <div className="divider">
            OR
          </div>

          
          <h6>create new account</h6>






        </div>
        <div className="signup-wraper">
          <h6>Back to login</h6>
        </div>

        
      </div>

    
  )
};

export default ForgotPassword;