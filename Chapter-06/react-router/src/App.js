import React from "react";
import {BrowserRouter, Routes,Route,Link,Outlet } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Speakers from "./pages/Speakers/Speakers";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import Homepage2 from "./pages/Home/Homepage2";
import Homepage3 from "./pages/Home/Homepage3";
import  './App.css';


const App = () => {
  return(
  <>
  <div className="navContainer">
<BrowserRouter>
<nav className="nav">
  <Link to="/" className="link">Home</Link>
  <Link to="about" className="link">About</Link>
  <Link to="speakers" className="link">Speakers</Link>
  <Link to="news" className="link">News</Link>
  <Link to="contact" className="link">Contact</Link>
</nav>
<Outlet />
<Routes>
     <Route index element={<Home />} />
     <Route path="home" element={<Home />} >
	  	<Route path='homepage2' element={<Homepage2/>}/>
      <Route path='homepage3' element={<Homepage3 />}/>
	  </Route>

      <Route path="about" element={<About />} />
      <Route path="speakers" element={<Speakers />} />
      <Route path="news" element={<News />} />
      <Route path="contact" element={<Contact />} />

</Routes>
</BrowserRouter>
</div>
  </>)
}


export default App;
