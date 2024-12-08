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
            < p style={{ color: "white", fontWeight: "bold", textAlign: "center", fontSize: "20px" }}>Features : </p>
            <p>Dashboard, Ordering, Assign orders to the chef , Billing System, Menu management, Employee Mangement & Salary.</p>
            <p style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>Technologies :</p>
            <p style={{ fontSize: "17px", }}>React, CSS, Nodejs, Expressjs, MongoDB</p>


            <button className='btn btn-outline-warning' style={{ border: "1px solid yellow", backgroundColor: "white", marginLeft: "135px", marginTop: "5px", }}> <a href="#">View</a></button>

          </div>

          <div className='projects'>

            <img src={res} alt="res" />
            <h5>Laptop Shop Management System</h5>
            < p style={{ color: "white", fontWeight: "bold", textAlign: "center", fontSize: "20px" }}>Features : </p>
            <p>Dashboard, Ordering, Assign orders to the chef , Billing System, Menu management, Employee Mangement & Salary.</p>
            <p style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>Technologies</p>
            <p style={{ fontSize: "17px", }}>React, CSS, Nodejs, Expressjs, MongoDB</p>


            <button className='btn btn-outline-warning' style={{ border: "1px solid yellow", backgroundColor: "white", marginLeft: "135px", marginTop: "5px", }}> <a href="#">View</a></button>

          </div>



          <div className='projects'>

            <img src={res} alt="res" />
            <h5>My Portfolio</h5>
            < p style={{ color: "white", fontWeight: "bold", textAlign: "center", fontSize: "20px" }}>Features : </p>
            <p>Dashboard, Ordering, Assign orders to the chef , Billing System, Menu management, Employee Mangement & Salary.</p>
            <p style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>Technologies :</p>
            <p style={{ fontSize: "17px", }}>React, CSS, Nodejs, Expressjs, MongoDB</p>


            <button className='btn btn-outline-warning' style={{ border: "1px solid yellow", backgroundColor: "white", marginLeft: "135px", marginTop: "5px", }}> <a href="#">View</a></button>

          </div>



        </div>

      </section>

    </div>
  )
}

export default Project