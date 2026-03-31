import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();
        if (data.success) {
        alert("Form Submitted Successfully");
        event.target.reset();
        } else {
        alert("Error");
        }
    };

  return (
    <div id="contact" className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt=""/>
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt=""/><p>greatstackdev@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt=""/><p>+777-825-524</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt=""/><p>CA, United States</p>
                    </div>
                </div>
            </div>

            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type="text" placeholder='Enter your name' name="name" required/>
                <label htmlFor=''>Your Email</label>
                <input type="email" placeholder='Enter your email' name="email" required/>
                <label htmlFor=''>Write your Message here</label>
                <textarea rows="8" placeholder='Enter your message here' name="message" required/>
                <button type="submit" className='contact-submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact