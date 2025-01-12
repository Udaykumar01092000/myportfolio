import React from "react";
import { Link } from "react-router-dom";
import "../css/services.css";

const Services = ()=>{
  return (
    <>
      <section id="services" className = "services-section" data-aos="fade-up">
        <h2 className = "services-head m-3" >Services</h2>
        <p className = "servicedesc m-3">Explore our range of services designed to elevate your online 
          presence and meet your digital needs.</p>
        <div className = "row gy-4 m-3">
          <div className = "col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className = "icon flex-shrink-0">
              <i className = "bi bi-palette"></i>
            </div>
            <div>
              <h4 className = "title"><Link to = "#" onClick={(e) => e.preventDefault()} className = "stretched-link">Website Design and Development</Link></h4>
              <p className = "servicedescription">Specializing in crafting visually compelling and user-centric websites, adept at leveraging modern technologies to create seamless digital experiences tailored to client specifications</p>
            </div>
          </div>
          <div className = "col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className = "icon flex-shrink-0"><i className = "bi bi-puzzle"></i></div>
            <div>
              <h4 className = "title"><Link to = "#" onClick={(e) => e.preventDefault()} className = "stretched-link">Custom Web Application Development</Link></h4>
              <p className = "servicedescription">Expertise in designing and developing bespoke web applications that cater to unique business needs, utilizing cutting-edge technologies to deliver scalable and efficient solutions."
                This description highlights the specialization in creating tailored web applications that meet specific requirements, emphasizing the use of advanced technologies for optimal performance and functionality.</p>
            </div>
          </div>

          <div className = "col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className = "icon flex-shrink-0"><i className = "bi bi-tablet"></i></div>
            <div>
              <h4 className = "title"><Link to = "#" onClick={(e) => e.preventDefault()} className = "stretched-link">Responsive Web Design</Link></h4>
              <p className = "servicedescription">Proficient in creating websites that seamlessly adapt and perform across various devices and screen sizes, ensuring optimal user experience and accessibility.</p>
            </div>
          </div>

          <div className = "col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className = "icon flex-shrink-0"><i className = "bi bi-cart"></i></div>
            <div>
              <h4 className = "title"><Link to = "#" onClick={(e) => e.preventDefault()} className = "stretched-link">E-commerce Solutions</Link></h4>
              <p className = "servicedescription">Specializing in developing robust e-commerce platforms 
                that drive sales and enhance customer engagement, leveraging leading platforms and custom solutions tailored to meet business goals.</p>
            </div>
          </div>

          <div className = "col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
            <div className = "icon flex-shrink-0"><i className = "bi bi-code-slash"></i></div>
            <div>
              <h4 className = "title"><Link to = "#" onClick={(e) => e.preventDefault()} className = "stretched-link">Frontend Development</Link></h4>
              <p className = "servicedescription">Skilled in crafting interactive and responsive user interfaces using HTML, 
                CSS, and JavaScript, with a focus on delivering engaging web experiences 
                that meet modern design standards and user expectations.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default Services;
