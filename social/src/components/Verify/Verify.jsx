import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { createtoast } from '../../utility/toast';



const Verify = () => {

  const params = useParams();

  const navigate = useNavigate();

  console.log(params);


  useEffect(() => {

    axios.post('http://localhost:5050/api/user/verify', params)
    .then(res => {

      createtoast('Account acctivation successful');
      navigate('/login');

    })
    .catch(error => {
      createtoast('Account acctivation faild')
    })

  });
  


  return (
    <div>Verify your account</div>
  )
};

export default Verify;