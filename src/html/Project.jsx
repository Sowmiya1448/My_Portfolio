import React from 'react'
import '../css/project.css'
import res from "../assets/res2.png"
import port from '../assets/port.png'
import lap from '../assets/lap.png'


const Project = () => {


  return (

    <div>
      <section className='pro'>

        <h2 className='project text-center'>My &nbsp;<span style={{ color: "#ffc107" }}>Projects</span></h2>

        <div className='pro-con'>

          <div className='projects'>

            <img src={res} alt="res" />
            <h5>Restaurant Management System</h5>
            <p className='tech'>Technologies Used : React, CSS, Nodejs, Expressjs, MongoDB</p>
            <p>Developed a Restaurant Management system with separate login pages for chefs and admins.
              Admin functionalities include Dashboard, ordering, billing, managing menus and employees,
              calculating monthly Salary based on Attendances.</p>

          </div>

          <div className='projects'>

            <img src={lap} alt="laptop" />
            <h5>Laptop Shop Management System</h5>
            <p className='tech'>Technologies Used : React, CSS, Nodejs, Expressjs, MongoDB</p>
            <p>Built a web application using the MERN stack for managing laptops, stock, dealer details,
              billing and payment details in a laptop shop.</p>




          </div>



          <div className='projects'>

            <img src={port} alt="portfolio" />
            <h5>My Portfolio</h5>
            <p className='tech'>Technologies Used : HTML, CSS, REACT</p>
            <p>Built a personal portfolio website using HTML, CSS and React,
              showcasing my skills and projects.</p>





          </div>



        </div>

      </section>

    </div>
  )
}

export default Project