import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accounts from './Accounts';
import AddOutcome from './AddOutcome';
import AddIncome from './AddIncome';
import AddUser from './AddUser';
import MainSidebar from './MainSidebar';

const MainPage = () => {
  return (
    <div>


    <BrowserRouter>
      <MainSidebar>
        <Routes>
          <Route path="/getAccounts" element={<Accounts/>} />
          <Route path="/addOutcome" element={<AddOutcome/>} />
          <Route path="/addIncome" element={<AddIncome/>}/>
          <Route path="/addUser" element={<AddUser/>}/>    
        </Routes>
      </MainSidebar>
    </BrowserRouter>      
      
    </div>
  )
}

export default MainPage