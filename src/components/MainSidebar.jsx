import React from 'react'
import { NavLink } from "react-router-dom";

 
const MainSidebar = ({children}) => {
  
  const menuItem = [
 
      {
        path: "/getAccounts",
        name: "Reports",
      },
      
      {
        path: "/addOutcome",
        name: "Add Outcome",
      },
      
      {
        path: "/addIncome",
        name: "Add Income",

      },
      
      {
        path: "/addUser",
        name: "All User",
      },


    ];
    
    return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="top_section">
            <h1 className="logo">Logo</h1>

            {menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="links">
                <div className="icon">{item.icon}</div>
                <div className="link__text">{item.name}</div>
              </NavLink>
            ))}
          </div>
        </div>

        <main>{children}</main>
      </div>

    </>
      
 
  );
}

export default MainSidebar









