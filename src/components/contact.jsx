import React from 'react'
import { Link } from 'react-router-dom'
import '../css/contact.css'

function Contact() {
  return (
    <>
      <section id="contact" className = "contact-section" data-aos = "fade-up">
        <h2 className ='contacthead'>Contact</h2>
        <p className ='contactdesc'>
          We value open communication and are here to address any inquiries or 
          concerns you may have. Whether you're interested in discussing potential 
          collaborations, have questions about our services, or simply want to say 
          hello, we encourage you to reach out. Your feedback and inquiries are 
          important to us, and we strive to respond promptly to all messages. 
          Feel free to use the contact form provided below, and we'll get back 
          to you as soon as possible.
        </p>
        <div className  = "row gy-4">
          <div className  = "col-lg-5"> 
            <div className  = "info-wrap">
              <div className ="info-item d-flex aos-init aos-animate mt-3" data-aos="fade-up" data-aos-delay="200">
                <i className ="bi bi-geo-alt flex-shrink-0 contacticons"></i>
                <div>
                  <h3>
                    Address
                  </h3>
                  <span className  = "addresstext">Hyderabad,Uppal</span>
                </div>
              </div>
              <div className ="info-item d-flex aos-init aos-animate mt-3" data-aos="fade-up" data-aos-delay="200">
                <i className ="bi bi-telephone flex-shrink-0 contacticons"></i>
                <div>
                  <h3>Call US</h3>
                  <span className  = "addresstext"><Link to = "tel:+916300919562">+91 6300919562</Link></span>
                </div>
              </div>
              <div className ="info-item d-flex aos-init aos-animate mt-3" data-aos="fade-up" data-aos-delay="200">
                <i className ="bi bi-envelope flex-shrink-0 contacticons"></i>
                <div>
                  <h3>Email</h3>
                  <span className="addresstext">
                    <a href="mailto:udaykumar.77348@gmail.com">udaykumar.77348@gmail.com</a>
                  </span>
                </div>
              </div>
              <iframe 
                className = "mt-5" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.827882548825!2d78.597945!3d17.432999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98ef1957a3df%3A0x9816d8ff0e54715d!2s17%C2%B025'58.8%22N%2078%C2%B035'52.6%22E!5e0!3m2!1sen!2sin!4v1624427461445!5m2!1sen!2sin" 
                frameborder="0" 
                style = {{ border:"0" , width: "100%" , height: "270px"}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Google Maps Location of Hyderabad Uppal"
                ></iframe>
            </div>  
          </div>
          <div className  = "col-lg-7"> 
            <div className  = "info-wrap">
              <form action = "https://formspree.io/f/xpwdzjpq" method = "POST" id="contact-form" onsubmit="sendEmail(event)" 
                className ="php-email-form aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                  <div className ="row gy-4">
                      <div className ="col-md-6">
                          <label for="name-field" className ="pb-2">Your Name</label>
                          <input type="text" name="name" id="name-field" className ="form-control" required="" />
                      </div>
                      <div className ="col-md-6">
                          <label for="email-field" className ="pb-2">Your Email</label>
                          <input type="email" className ="form-control" name="email" id="email-field" required="" />
                      </div>
                      <div className ="col-md-12">
                          <label for="subject-field" className ="pb-2">Subject</label>
                          <input type="text" className ="form-control" name="subject" id="subject-field" required="" />
                      </div>
                      <div className ="col-md-12">
                          <label for="message-field" className ="pb-2">Message</label>
                          <textarea className ="form-control" name="message" rows="10" id="message-field" required=""></textarea>
                      </div>
                      <div className ="col-md-12 text-center mt-4 sendbtn">
                          <button type="submit">Send Message</button>
                      </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
