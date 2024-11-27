import React, { useState } from 'react'
import '../css/About.css'
import '../css/Skills.css'
import git from '../assets/git1.png'
import arrow from '../assets/right.png'


const About = () => {

    const [show, setShow] = useState(true)

    return (
        <div className='about'>

            <section>
                
                <h1 className='aboutme'><span style={{color:'orange'}}>About </span>me</h1>

            <div className='mee1'>

                        <br />  <p>
                            Hello, I'm Sowmiya,Dedicated to build Dynamic and user-focused web applications.
                            I work with both front-end and back-end technologies.

                            <br /> <br />
                        </p>
                    </div>

                    <div className='details'>
                        <h5 className='info'>Name: <span>S Sowmiya</span></h5>
                        <h5 className='info'>Age: <span>20</span></h5>
                        <h5 className='info'>Experience: <span>Fresher</span></h5>
                        <h5 className='info'>Qualification: <span>B.SC Information Technology</span></h5>
                        <h5 className='info'>Year Of PassedOut: <span>2024</span></h5>

                 </div>

            

                <div className='mblskill'>
                    <h4>Skills</h4>
                    <ul>
                        <li className='mblsk'><img src={arrow} alt="" width={'25px'} height={'25px'} />HTML5</li>
                        <li><img src={arrow} alt="" width={'25px'} height={'25px'} /> CSS3</li>
                        <li><img src={arrow} alt="" width={'25px'} height={'25px'} />JAVASCRIPT</li>
                        <li><img src={arrow} alt="" width={'25px'} height={'25px'} />REACT JS</li>
                        <li><img src={arrow} alt="" width={'25px'} height={'25px'} />BOOTSTRAP</li>
                        <li><img src={arrow} alt="" width={'25px'} height={'25px'} />NODE JS</li>
                        <li><img src={arrow} alt="" width={'25px'} height={'25px'} />EXPRESS JS</li>
                        <li><img src={arrow} alt="" width={'25px'} height={'25px'} />GITHUB <img src={git} width={'30px'} height={'30px'} /></li>
                    </ul>
                </div>

                <div className='mblskill'>
                    <h4>Cerificates</h4>
                    <ul>
                        <li> <img src={arrow} alt="" width={'25px'} height={'25px'} /> Mern Stack Development Course - ( June - September 2024 ) - Certificate of completion
                            At Qtree Technologies, Coimbatore.</li><br />
                        <li> <img src={arrow} alt="" width={'25px'} height={'25px'} /> python - Certificate of completion At Besent Technologies.</li> <br />
                        <li> <img src={arrow} alt="" width={'25px'} height={'25px'} />Participation Certificate of Full Stack Development - Workshop At Gobi arts and science college.<br /><br />
                        </li>
                    </ul>
                </div>






       <div className='ab'>
       <nav >
                    <ul>
                        <li onClick={() => setShow(true)}>
                            Skills
                        </li>

                        <li onClick={() => setShow(false)}>
                            Certificates
                        </li>

                    </ul>
                </nav>
       </div>

                {show ? (

                    <div className='skilly'  >
                        <div className='frontend'>
                            <ul>
                                <li className='head' >Front - End : </li>
                                <li> Html 5, </li>
                                <li> CSS 3, </li>
                                <li>Javascript, </li>
                                <li> React Js, </li>
                                <li>BootStrap</li>
                            </ul>
                        </div >

                        <div className='frontend'><ul>
                            <li className='head'>Back - End : </li>
                            <li> Node Js, </li>
                            <li> Express Js</li>
                        </ul>
                        </div>

                        <div className='frontend'>
                            <ul>
                                <li className='head' >Database : </li>
                                <li>Mongo DB</li>
                            </ul>
                        </div>
                        <div className='frontend'>
                            <ul>
                                <li className='head' >Programming language : </li>
                                <li>C, </li>
                                <li>Python</li>
                            </ul>
                        </div>
                        
                        <div className='frontend'>
                            <ul>
                                <li className='head' >Tools: </li>
                                <li>VS Code, </li>
                                <li>Postman, </li>
                                <li>Github <img src={git} alt="" width={'40px'} height={'40px'} /></li>
                            </ul>
                        </div>

                       

                     
                    </div>

                ) : (
                    <div className='skillsk'>

                        <li> <img src={arrow} alt="" width={'25px'} height={'25px'} /> Mern Stack Development Course -( June - September 2024 ) - Certificate of completion
                            At Qtree Technologies, Coimbatore.</li><br /> <br />
                        <li> <img src={arrow} alt="" width={'25px'} height={'25px'} /> python - Certificate of completion At Besent Technologies.</li> <br /><br />
                        <li> <img src={arrow} alt="" width={'25px'} height={'25px'} />Participation Certificate of Full Stack Development - Workshop At Gobi arts and science college.<br /><br />
                        </li>
                    </div>
)}

          
            </section>

        </div>
    )
}

export default About