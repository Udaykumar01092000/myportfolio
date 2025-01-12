import React from 'react'
import '../css/summary.css'

function Summary() {
  return (
    <>
    <section id="resume" className ="summary-section">
        <div className ="row">
                <div className ="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <h3 className ="summary-title">Sumary</h3>
                    <div className ="resume-item pb-0">
                    <h3>Uday Kumar</h3>
                    <p>
                    <em>
                        Experienced web developer with over one year of hands-on experience 
                        in designing and maintaining websites using WordPress. 
                        Skilled in front-end development with expertise in HTML, CSS,
                        Bootstrap, JavaScript, WordPress, and React. 
                        <br/><br/>
                        From conceptualization to launch, adept at crafting user-friendly 
                        digital solutions that meet client objectives and exceed expectations. 
                        Proven ability to tackle complex web development challenges with creativity 
                        and precision, ensuring timely delivery of polished and effective outcomes.

                    </em></p>
                    <ul>
                        <li>Uppal , Hyderabad</li>
                        <li>+91 6300919562</li>
                        <li>udaykumar.77348@gmail.com</li>
                    </ul>
                </div>
                </div>
            <div className ="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <h3 className ="summary-title">Education</h3>
                <div className ="resume-item">
                <h3>Bachelor of Computer Science</h3>
                <h4 className  = "timeline">2019 - 2022</h4>
                <p><em>New Nobel Degree College , Dilsukhnagar , Hyderabad</em></p>
                <p>
                    I pursued my Bachelor's degree in New Nobel Degree College, 
                    specializing in BSc (MECs), from 2019 to 2022. During this period, 
                    I acquired comprehensive knowledge and practical skills in various 
                    aspects of creative , technology , communication and related fields. 
                    This educational journey has equipped me with 
                    a solid foundation to excel in my career as a web developer.
                </p>
                </div>
            </div>
        </div>
        <h3 className ="summary-title">Professional Experience</h3>
        <div className ="resume-item">
                <h3>WORDPRESS DEVELOPER </h3>
                <h4 className ='timeline'>2022-2023</h4>
                <p><em>iBridge Digital, Madhapur </em></p>
                <ul>
                    <li>Worked at iBridge Digital in Madhapur as a WordPress Developer for 1 year.</li>
                    <li>Honed skills in HTML , CSS , JavaScript , Wordpress website design and development during this tenure.</li>
                    <li>Contributed to various projects, gaining hands-on experience in the field.</li>
                    <li>Collaborated with a talented team to create engaging and user-friendly websites.</li>
                    <li>Successfully met the unique needs and specifications of clients through project work.</li>
                    <li>Developed expertise in WordPress customization and enhanced proficiency as a web developer through practical application at iBridge Digital.</li>
                    <li>Maintained websites by updating and deleting data based on client requirements.</li>
                    <li>Built new websites from concept to launch, ensuring polished and effective outcomes.</li>
                </ul>
        </div>
        <div className ="resume-item">
                <h3>WORDPRESS DEVELOPER </h3>
                <h4 className ='timeline'>2024-Present</h4>
                <p><em>Vaartha Publications, Lower Tank Bund Hyd </em></p>
                <ul>
                    <li>Working at Vaartha Publications in Lower Tank Bund as a WordPress Developer.</li>
                    <li>Contributed to various projects, gaining hands-on experience in the field.</li>
                    <li>Collaborated with a talented team to create engaging and user-friendly websites.</li>
                    <li>Successfully met the unique needs and specifications of clients through project work.</li>
                    <li>Maintained websites by updating and deleting data based on client requirements.</li>
                </ul>
        </div>
    </section>
    </>
  )
}

export default Summary