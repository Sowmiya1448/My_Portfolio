import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Me.css'


const Me = () => {

    return (
        <div className='mine'>
            <section>

                <div className='mee'>

                    <h3>Hello ! </h3>
                    <h1>I,M<span> Sowmiya</span></h1>
                    <h3 className='text'>MERN STACK DEVELOPER</h3>

                    <p style={{ fontSize: "18px" }}>
                        I'm passionate about designing user-friendly interfaces and responsive layouts.
                        I am skilled in working with technologies like React, Node.js, MongoDB, and Express.
                        My goal is to make web applications that are useful and enjoyable for people to use.

                    </p>

                    <div className="bt1">

                        <NavLink className={'nav-link'} to={'/about'}>

                            <button className='bt'>About me  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg></button>

                        </NavLink>

                        <button className='bt'>
                            <a href="sowmiya%20s.pdf" download="myresume.pdf" style={{ textDecoration: 'none', color: 'inherit' }}>
                                Download CV
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                                </svg>
                            </a>
                        </button>

                    </div>
                </div>

            </section>

        </div>

    )
}

export default Me
