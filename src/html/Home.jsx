import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Home.css'

const Home = () => {

  const [ismbl, setIsmbl] = useState(false)

  return (
    <div>

      <header className={ismbl ? 'nav-mbl' : 'nav'} onClick={() => setIsmbl(false)}>

        <div className='me' style={{ paddingLeft: "20px" }}>
          <h2 className='name'>S Sowmiya</h2>
        </div>

        <div className='navbar'>
          <ul>

            <NavLink className={"nav-link"} to={'/'}><li>Home </li></NavLink>
            <NavLink className={"nav-link"} to={'/about'} > <li>About</li></NavLink>
            <NavLink className={"nav-link"} to={'/project'}><li>project</li></NavLink>
            <NavLink className={"nav-link"} to={'/edu'}> <li>Education</li></NavLink>
            <NavLink className={"nav-link"}  to={'/contact/'}> <li>Contact</li></NavLink>
          
         



          </ul>
        </div>

      </header>


      <div className="menu">

        <button  onClick={() => setIsmbl(!ismbl)}>

          {ismbl ? <h3>X</h3> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg>}

        </button>
      </div>

    </div>
  )
}

export default Home