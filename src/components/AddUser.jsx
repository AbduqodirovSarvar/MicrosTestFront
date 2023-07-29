import React, { memo } from 'react'
import { useState } from 'react';
import { UseToken } from '../hook/LoginHook';

const AddUser = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [balance,  setBalance] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [gender, setGender] = useState('');
  const [position, setPosition] = useState('');
  const {adToken} = UseToken()


  const handleSubmit = async (event) => {
    event.preventDefault();

    const inputData = {
      "firstName": firstName,
      "lastName": lastName,
      "password": password ,
      "balance": parseInt(balance),
      "birthDay": birthDay,
      "gender": parseInt(gender),
      "position": parseInt(position)


    };
   

    try {
      const response = await fetch('http://localhost:7200/api/User/Create', {
        
        method: 'POST',
        headers: {
          // 'Authorization': adToken ,
          'accept': '*/*',
        'Authorization': adToken,//`Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImp0aSI6ImQ1MTdlZWE1LTVhYWEtNGE4NC1hODY0LWFmMjY4ZDAyM2VlZCIsIm5hbWUiOiIyOS8wNy8yMDIzIDAwOjE5OjQ0IiwiZXhwIjoxNjkwNjc2Mzg0LCJpc3MiOiJNaWNyb3NUZXN0SXNzdWVyIiwiYXVkIjoiTWljcm9zVGVzdEF1ZGllbmNlIn0.ZGLqxsAsDrqln--zYPjwAGlfZAY1fD4jakvKJgBBOQw`,
        'Content-Type': 'application/json'
        },

      
        body: JSON.stringify(inputData)
      });
      
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFirstNameChange = (event) => {
    setFirstName (event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleBalanceChange = (event) => {
    setBalance(event.target.value);
  };

  const handleBirthDayChange = (event) => {
    setBirthDay(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  
  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };


  return (
    <div>
       <form className='inputForm' action="" onSubmit={handleSubmit}>
          <input className='input' name='firstName' placeholder='FirstName' type="text" value={firstName} onChange={handleFirstNameChange} />
          <input className='input' name='lastName' placeholder='LastName' type="text" value={lastName} onChange={handleLastNameChange} />
          <input className='input' name='password' placeholder='Password' type="password" value={password} onChange={handlePasswordChange}/>
          <input className='input' name='balance' placeholder='Balance' type="number" value={balance} onChange={handleBalanceChange}/>
          <input className='input' name='birthDay' placeholder='BirthDay' type="date" value={birthDay} onChange={handleBirthDayChange} />
          <input className='input' name='gender' placeholder='Gender' type="number" value={gender} onChange={handleGenderChange}/>
          <input className='input' name='position' placeholder='Position' type="number" value={position} onChange={handlePositionChange}/>
          <button type='submit' className='submitBtn'>Submit</button>
        </form>
    </div>
  )
}

export default AddUser