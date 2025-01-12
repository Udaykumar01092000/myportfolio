import React , {useState , useEffect} from 'react';
import myProfile from '../assets/gallery/myprofile.jpg'
import '../css/about.css';

function About() {

  const birthdate = '2000-09-01';

  const calculateAge = (birthdate) => {
    const birthDateObj = new Date(birthdate);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDateObj.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDateObj.getDate())) {
      return age - 1;
    }
    return age;
  };

  const [age, setAge] = useState(calculateAge(birthdate));

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge(birthdate));
    }, 1000); 

    return () => clearInterval(interval);
  }, [birthdate]);

  return (
    <>
      <section id="about" className  = "about-section">
        <h2 className  = "abouthead">About</h2>
        <p className  = 'aboutcontent'>Hello! I'm Uday Kumar, a passionate web developer 
          with a focus on React. While I initially gained hands-on experience in 
          WordPress website design, I'm now excited to pivot towards mastering React. 
          As a fresher in React development, I'm eager to leverage its capabilities to 
          create dynamic and interactive user interfaces.</p>
        <p className ='aboutcontent'>I thrive on tackling new challenges and am committed 
          to honing my skills in React to contribute effectively to innovative web projects.
          I look forward to exploring new possibilities and pushing boundaries in web 
          development.</p>
        <section>
          <div className ='row'>
            <div className  = "col-lg-4">
              <img className ='myprofile' src = {myProfile} alt = "myProfile" />
            </div>
            <div className  = "col-lg-8 myprofilecontent p-3">
              <h2>Web Developer </h2>
              <p className  = "aboutme">Hello, I'm M. Uday Kumar, a dedicated web developer with a BSc in MECs. 
                I specialize in <b>React, WordPress, HTML, CSS, and Bootstrap</b>. My journey in 
                web development has been enriched through projects like ElvenCricket 
                (an eCommerce platform) and SitaaraHomes (a real estate website) using wordpress.</p>
                <div className ='row'>
                  <div className ='col-lg-6 personaldetails' >
                    <p><span className ='chevron'>{"\u003E "}</span><strong>Birthday: </strong><span>1 September 2000</span></p>
                    <p><span className ='chevron'>{"\u003E "}</span><strong>Email: </strong><span>udaykumar.77348@gmail.com</span></p>
                    <p><span className ='chevron'>{"\u003E "}</span><strong>Phone: </strong><span>+91 6300919562</span></p>
                  </div>
                  <div className ='col-lg-6 personaldetails'>
                    <p><span className ='chevron'>{"\u003E "}</span><strong>Age:</strong><span id = "age">{age}</span></p>
                    <p><span className ='chevron'>{"\u003E "}</span><strong>Degree:</strong><span>BSC</span></p>
                    <p><span className ='chevron'>{"\u003E "}</span><strong>City:</strong><span>Hyderabad , Telangana</span></p>
                  </div>
                  <p className ='personaldetails'><span className ='chevron'>{"\u003E "}</span><b>Website: </b>https://udaykumarportfolio.netlify.app/</p>
                </div>
                <p className ="py-3">
                  In React, I've developed a dynamic eCommerce platform that enhances user
                  experience through interactive features and smooth navigation.
                  Additionally, I've crafted a Movie Search Engine using React, leveraging 
                  Bootstrap for responsive design and ensuring seamless functionality across
                  devices.            
                </p>  
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default About;
