import React from 'react'
import '../css/contact.css'
import mail from '../assets/mail1.png'
import call from '../assets/telephone.png'
import git from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import insta from '../assets/instagram.png'
import email from '../assets/email.png';



const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9c2bf3e3-64a0-4fff-912b-2432dd22c804");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());



    if (res.success) {
      alert(res.message);

    }
  };


  return (
    <div>

      <section className='contact'>



        <h2 className='titlecon'>Contact <span>Me</span></h2>




        <div className='contact_part'>

          <div className='my_contact'>

            <h3>Let's get talk</h3>
            <div className="contact_details">

              <div className='con_detail'>
                <img src={mail} alt="" width={'25px'} height={'25px'} /><p>sowmi625@gmail.com</p>
              </div>

              <div className='con_detail'>
                <img src={call} alt="" width={'25px'} height={'25px'} /> <p>+916374102745</p>
              </div>

              <div className='con_detail'>

              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className='contact_right'>

            <label htmlFor="">Your Name: </label>
            <input type="text" name="name" placeholder='Enter your name' />

            <label htmlFor="">Your Email: </label>
            <input type="email" placeholder='Enter your email' name='email' />

            <label htmlFor="">Message: </label>
            <textarea name="message" rows='8' placeholder='Enter your message'></textarea>

            <button type='submit' className='submitbtn'>Submit</button>

          </form>
        </div>


      </section>
      <footer>

        <div className='icon'>

          <button><a href="https://github.com/Sowmiya1448" target='_blank'><img src={git} alt="github" height={"25px"} width={"25px"} /></a></button>
          <button><a href="https://www.linkedin.com/in/sowmiya-sr?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><img src={linkedin} alt="in" height={"25px"} width={"25px"} /></a></button>
          <button><a href="#"><img src={insta} alt="insta" height={"25px"} width={"25px"} /></a></button>
          <button><a href="#"><img src={email} alt="email" height={"25px"} width={"25px"} /></a></button>
        </div>

        <p className='text-center' style={{ color: "white", fontSize: "20px" }}>Designed & Built by Sowmiya © Copyright 2024</p>

      </footer>
    </div>
  )
}

export default Contact