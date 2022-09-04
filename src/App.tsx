import React from "react";
import {  Routes, Route } from "react-router-dom";
import UserList from "./pages/userlist";
import AddUser from "./pages/adduser";


function App() {

  return (
    <div>
      
    <Routes>
  
      <Route path="/" element={<UserList />} />
      <Route path="/add" element={<AddUser />} />
    </Routes>
    </div>
  )
}


export default App;
