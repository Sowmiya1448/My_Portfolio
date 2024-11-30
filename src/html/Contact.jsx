import React from 'react'
import '../css/contact.css'
import mail from '../assets/mail1.png'

import call from '../assets/telephone.png'


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

    <div className='con_title'>
      
         <h2 className='titlecon '>Contact <span>Me</span></h2>
     
         </div>
      

     <div className='contact_part'>

          <div className='my_contact'>

                <h3>Let's get talk</h3>
                  <div className="contact_details">
                
                        <div className='con_detail'>
                        <img src={mail} alt=""  width={'25px'} height={'25px'}/><p>sowmiyarasathi@gmail.com</p>
                        </div>

                        <div className='con_detail'>
                        <img src={call} alt=""  width={'25px'} height={'25px'} /> <p>+916374102745</p>
                        </div>

                        <div className='con_detail'>
                        
                    </div>
                </div>
            </div>

<form onSubmit={onSubmit} className='contact_right'>

<label htmlFor="">Your Name: </label>
<input type="text" name="name" placeholder='Enter your name'  />

<label htmlFor="">Your Email: </label>
<input type="email" placeholder='Enter your email' name='email' />

<label htmlFor="">Message: </label>
<textarea name="message" rows='8' placeholder='Enter your message'></textarea>

   <button type='submit' className='submitbtn'>Submit</button>
   
</form>
 </div>


</section>
    </div>
  )
}

export default Contact