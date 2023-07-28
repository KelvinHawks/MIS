import React from 'react'
import './sidebar.css'
import { sidebarData } from '../sidebarData'

function Sidebar() {
  const array = sidebarData.map(sidebar =>{
    return <li key={sidebar.id} id={window.location.pathname === sidebar.link ? "active": ""} className='row' onClick={()=>{window.location.pathname = sidebar.link}}>
        <div id='icon'>{sidebar.icon}</div>
        <div id='title'>{sidebar.title}</div>
        <div></div>
      </li>
  })
  return (
    <div className='container'>
      <ul className='sidebarlist'>
        {array}
      </ul>
      
    </div>
  )
}

export default Sidebar