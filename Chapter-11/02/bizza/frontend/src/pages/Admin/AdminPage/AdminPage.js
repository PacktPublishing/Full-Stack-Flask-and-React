import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/admin/Sidebar/Sidebar";

import './AdminPage.css'

const AdminPage = () => {

  return (
  <div className="container">
    <div><Navbar/></div>
    <div><Outlet /></div>
  </div>


  );

};