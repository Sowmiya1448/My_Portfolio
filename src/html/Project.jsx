import React from 'react'
import '../css/project.css'
import res from "../assets/res.png"


const Project = () => {


  return (

    <div>
      <section className='pro'>

        <h2 className='project text-center'>My &nbsp;<span style={{ color: "#ffc107" }}>Projects</span></h2>

        <div className='pro-con'>




          <div className='projects'>

            <img src={res} alt="res" />
            <h5>Restaurant Management System</h5>
            <p>Technologies Used : React, CSS, Nodejs, Expressjs, MongoDB</p>
            <button > <a href="#">View</a></button>

          </div>

          <div className='projects'>

            <img src={res} alt="res" />
            <h5>Laptop Shop Management System</h5>
            <p>Technologies Used : React, CSS, Nodejs, Expressjs, MongoDB</p>
          


            <button> <a href="#">View</a></button>

          </div>



          <div className='projects'>

            <img src={res} alt="res" />
            <h5>My Portfolio</h5>
            <p>Technologies Used : HTML, CSS, REACT</p>
    


            <button > <a href="#">View</a></button>

          </div>



        </div>

      </section>

    </div>
  )
}

export default Project