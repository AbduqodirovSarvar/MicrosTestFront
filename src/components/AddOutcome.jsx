import React, { memo } from 'react'
import { useState } from 'react';
import { UseToken } from '../hook/LoginHook';



const AddOutcome = () => {

    // const [num, setNum] = useState();
    const [amount, setAmount] = useState();
    const [category, setCategory] = useState();
    const {adToken} = UseToken()
  
    const handleSubmit = async (event) => {
      event.preventDefault();

      const inputData = {
        "amount": parseInt(amount),
        "category": parseInt(category)
        
      };
      
  
      try {
        const response = await fetch('http://localhost:7200/api/OutCome/Create', {
          method: 'POST',
          headers: {
            'accept': '*/*',
          'Authorization': adToken,//'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDaGlsZCIsImp0aSI6IjNjNDkzMTAzLTIwNWItNGY3NC05ZjAxLTA2ZjQzMDM2ODA4NCIsIm5hbWUiOiIyOC8wNy8yMDIzIDE5OjA1OjM2IiwiZXhwIjoxNjkwNjU3NTM2LCJpc3MiOiJNaWNyb3NUZXN0SXNzdWVyIiwiYXVkIjoiTWljcm9zVGVzdEF1ZGllbmNlIn0.1vPnjFBMThajOs0oQfZcsb0GGxiVc8qZ_Aupap1t2yE',
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
  
    const handleAmountChange = (event) => {
      setAmount(event.target.value);
      

    };
  
    const handleCategoryChange = (event) => {
      setCategory(event.target.value);
    };

  return (
    <div>
      <div>
      <form className='inputForm' onSubmit={handleSubmit}>
      <input className='input' name='amount' placeholder='Amount' type="number"  onChange={handleAmountChange} />
      <input className='input' name='category' placeholder='Category' type="number"  onChange={handleCategoryChange} />
      <button type='submit' className='submitBtn'>Submit</button>
    </form>
      </div>
    </div>
  )
}

export default AddOutcome