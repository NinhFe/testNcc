import React, { useState } from 'react'
import NavBar from '../components/NavBar.jsx';
import Content from '../components/Content.jsx';
import "../assets/css/main.css"
export default function Main() {
    const dataNav = [
        {
            label: "Home"
        },
        {
            label: "Services"
        },
        {
            label: "Blog"
        },
        {
            label: "Contact"
        },
    ]
    const [toggle, setToggle] = useState(false)
    return (
      <>
        <button className='toggle' onClick={()=>setToggle(!toggle)}>
            <img src={require("../assets/img/menu_icon.png")} alt="" />
        </button>
        <div className='container'>
            <NavBar data={dataNav} toggle={toggle}/>
            <Content/>
        </div>
        
      </>
    );
}
