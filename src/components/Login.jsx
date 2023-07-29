// import { wait } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
// import { Route } from 'react-router-dom';
// import MainPage from './MainPage';
import { UseToken } from '../hook/LoginHook';

const Login = () => {

  // Define state variables for email, password, and error messages
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {setAdToken} = UseToken()
  // const [adToken, setAdToken] = useState()

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send login request to API with email, password, and API key

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "firstName": firstName,
  "password": password
});

var requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY_HERE'
  },
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:7200/api/Authorize/Login", requestOptions)
  .then(response => response.text())
  .then(result => setAdToken(result))
  .catch(error => console.log('error', error));



// axios.post('https://pro.zirapcha.uz/api/user/login', {
//   headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer YOUR_API_KEY_HERE'
//         },
//     })
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log(error.error);
//     });
//   }

    
  //   if (adToken) {
  //     // Login successful, redirect to homepage
  //     window.location.href = '/';

  //   } else {
  //     // Login failed, display error message
  //     const data = await adToken;
  //     setError(data);
  //   }
  };

  return (
    <div className='loginPage'>
      <h1 className='loginTitle'>Login</h1>
      {error && <p>{error}</p>}
      <form className='loginForm' onSubmit={handleSubmit}>
        <label className='loginLabel' htmlFor="firstName">FirstName:</label>
        <input
          type="text"
          id="firtsName"
          value={firstName}
          className='input'
          onChange={(event) => setFirstName(event.target.value)}
        />

        <label className='loginLabel' htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          className='input'
          onChange={(event) => setPassword(event.target.value)}
        />

        <button className='submitBtn' type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;