import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import Home from "../Home";
import Register from "../Register";
import Contact from "../Contact";
import Sidebar from "../../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import React, { useState }  from "react";

function App() {

      const [showSidebar , setShowSidebar] = useState(false);

      const openSidebar = ()=> {
        setShowSidebar(true);
      }
      const closeSidebar = ()=> {
        setShowSidebar(false);
      }
 
  return (
    <>
      <header className={css.Toolbar}>
        <Toolbar openSidebar={openSidebar} />
        <div className={css.Sidebar}>
        <Sidebar showSidebar={showSidebar} closeSidebar={closeSidebar}/>
        </div>
        
      </header>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
