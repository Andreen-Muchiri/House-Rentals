import React from "react"
import img from "./img/pricing.jpg"
import Back from "./header/Back"
import "./contact.css"

function Contact() {
 
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Reach Us To Get Helps & Friendly Support' cover={img} />
        <div className='container'>

        <form className='flex'>
        <h4>Fillup The Form</h4> <br />
            <div className='box'>
              <span>Name</span>
              <input type='text' placeholder='Name' />
            </div>
            <div className='box'>
              <span>Email</span>
              <input type='text' placeholder='Email' />
            </div>
            <div className='box'>
              <span>Subject</span>
              <input type='text' placeholder='Subject' />
            </div>
          
            <button className='btn1'>
             Submit
             </button>
          </form>
          
        </div>
      </section>
    </>
  )
}

export default Contact


