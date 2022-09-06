import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import image from '../ResetPassword/reset-password-icon-8.jpg';
import axios from 'axios';
import './ResetPassword.scss';
import { createtoast } from '../../utility/toast';



const ResetPassword = () => {

  // get params
  const { token } = useParams();
  const navigate = useNavigate();

    // email state
    const [ password, setPassword ] = useState('');
    const [ cpassword, setCPassword ] = useState('');
    const [ msg, setMsg ] = useState({
        type : '',
        msg : '',
        status : false
    });


    

    const handlePasswordReset = async (e) => {
      e.preventDefault()

      // check password
      if( !password ) {

        setMsg({
          type : 'Danger',
          msg : 'Plase set your password',
          status : true
        });

      }else if( password !== cpassword ) {

        setMsg({
          type : 'warning',
          msg : 'password not match',
          status : true
        });
      } else {


        await axios.post('http://localhost:5050/api/user/reset-password', { token, password })
        .then(res => {
          setMsg({
            type : '',
            msg : '',
            status : false
  
          });
          createtoast('Your password changed');
          navigate('/login');

        })
        .catch( error => {
          
          createtoast('Time out, Please try again');

        });

      }

      

    }


    

    

  return (


    <div className='login-container'>


        <div className="login-wraper">
          <div className="imgg">
          <a className='login-logo-link' href="#"><img className='login-logo' src={image} alt="" /></a>
          </div>
          <h6>Rest Your Password ?</h6>
          <h5>Enter your email, we'll send you a link to get back into your account</h5>

          { msg.status && <p className={ `alert alert-${msg.type}` }> {msg.msg} </p> }
          <form onSubmit={ handlePasswordReset }  className="login-from" method='POST'>
            <div className="for_input">
            <input type="password" className="form-control" name='password' value={ password } onChange={ e => setPassword(e.target.value)} placeholder='New Password' />
            </div>
            <div className="for_input-to">
            <input type="password" className="form-control" name='confirm_password' value={ cpassword } onChange={ e => setCPassword(e.target.value)} placeholder='confirm New Password' />
            </div>
            
            <div className="send_button-reset">
            <button type='submit' className='btn btn-primary'>Change password</button>
            </div>
          </form>

          <div className="divider">
            OR
          </div>

          
          <h6>create new password</h6>






        </div>
        <div className="signup-wraper">
          <h6>Back to login</h6>
        </div>

        
      </div>

    
  )
};

export default ResetPassword;