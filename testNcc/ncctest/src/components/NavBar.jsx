import React from 'react'
import "../assets/css/navbar.css"

export default function NavBar(props) {
  return (
    <div className='navbar' style={{display:  props.toggle?'block':'none'}}>
        <ul className='navbar__list'>
            {
                props.data.map((data,index)=><li key={index}>{data.label}</li>)
            }
        </ul>
    </div>
  )
}
