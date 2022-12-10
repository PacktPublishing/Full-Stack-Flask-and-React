import React from "react";
import {Link,Outlet } from "react-router-dom";

const Home = () => {
  return <div> <h1>Home Component</h1>

<div className="submenuNav">
        <Link to="/home/homepage2">Homepage2</Link>
        <Link to="/home/homepage3">Homepage3</Link>
      </div>
      <Outlet/>
  </div>;
};

export default Home;
