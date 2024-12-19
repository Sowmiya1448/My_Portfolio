import React from 'react'
import '../css/About.css'
import '../css/Skills.css'
import git from '../assets/git1.png'
import arrow from '../assets/right.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import rjs from '../assets/react1.png'
import boot from '../assets/boot2.svg'
import node from '../assets/node.png'
import ex from '../assets/express.svg'
import db from '../assets/mongodb.svg'
import gitt from '../assets/github.png'




const About = () => {


    return (
        <div className='about'>

            <section>
                
                <div className='aboutme'>
                    
                <h1><span style={{ color: 'orange' }}>About </span>me </h1>

                </div>

                <div className='mee1'>

                    <br />  <p>
                        Hello, I'm Sowmiya,Dedicated to build Dynamic and user-focused web applications.
                        I work with both front-end and back-end technologies.

                        <br /> <br />
                    </p>
                </div>

                <div className='details'>
                    <h5 className='info'>Name: <span>S Sowmiya</span></h5>
                    <h5 className='info'>Age: <span>21</span></h5>
                    <h5 className='info'>Experience: <span>Fresher</span></h5>
                    <h5 className='info'>Qualification: <span>B.SC Information Technology</span></h5>
                    <h5 className='info'>Year Of PassedOut: <span>2024</span></h5>

                </div>



                <div className='mblskill'>
                    <h4>Skills</h4>
                    <ul>
                        <li className='mblsk'><img src={arrow} alt="" width={'25px'} height={'25px'} />HTML5</li>
                        <li><img src={arrow} alt="" width={'25px'} height={'25px'} /> CSS3 </li>
                        <li><img src={arrow} alt="" width={'25px'} height={'25px'} />JAVASCRIPT</li>
                        <li><img src={arrow} alt="" width={'25px'} height={'25px'} />REACT JS</li>
                        <li><img src={arrow} alt="" width={'25px'} height={'25px'} />BOOTSTRAP </li>
                        <li><img src={arrow} alt="" width={'25px'} height={'25px'} />NODE JS</li>
                        <li><img src={arrow} alt="" width={'25px'} height={'25px'} />EXPRESS JS</li>
                        <li><img src={arrow} alt="" width={'25px'} height={'25px'} />MONGODB</li>
                        <li><img src={arrow} alt="" width={'25px'} height={'25px'} />GITHUB <img src={git} width={'25'} height={'25'}/></li>
                    </ul>
                </div>

                <div className='ab'>
                    <nav >
                        <ul>
                            <li>
                                Skills
                            </li>

                        </ul>
                    </nav>
                </div>




             
                <div className='skilly'>
                   
                      <div>
                        <h6>HTML</h6>
                        <img src={html} alt="" height={"50px"} width={"50px"} />
                    </div>
                    <div> <h6>CSS</h6><img src={css} alt="" height={"50px"} width={"50px"} /></div>
                    <div><h6>JavaScript</h6><img src={js} alt="" height={"50px"} width={"50px"} /></div>

                    <div>
                        <h6>React</h6>
                        <img src={rjs} alt="" height={"50px"} width={"50px"} /> &nbsp;
                    </div>
                    <div>
                        <h6>Bootstrap</h6>
                        <img src={boot} alt="" height={"50px"} width={"50px"} />
                    </div>
                    <div>
                        <h6>Node js</h6>
                        <img src={node} alt="" height={"50px"} width={"50px"} />
                    </div>
                    <div>
                        <h6>Express js</h6>
                        <img src={ex} alt="" height={"50px"} width={"50px"} />
                    </div>
                    <div>
                        <h6>MongoDB</h6>
                        <img src={db} alt="" height={"50px"} width={"50px"} />
                    </div>
                    <div>
                        <h6>GitHub</h6>
                        <img src={gitt} alt="" height={"50px"} width={"50px"} />
                    </div>
                

                </div>


            </section>

        </div>
    )
}

export default About