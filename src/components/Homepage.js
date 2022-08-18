import React from 'react';
import './style.css'
import Softwork from '../components/Assets/Softwork.jpg'
import linkedin from '../components/Assets/linkedin.png'
import twitter from '../components/Assets/twitter.png'
import email from '../components/Assets/email.png'
import tel from '../components/Assets/tel.png'


/*import Computer from '../components/Assets/Computer.jpg'*/

const Homepage = () => {
    return <div className='container'>
        <header>
            <nav className="nav">
             <ul>
              <li><img src={Softwork} alt="Softwork" /></li>
              <li><h1>Gbadamosi<br></br>Sofiyat</h1><em>A Front-end Web Developer</em></li>
              <a href='https://twitter.com/SofiyatG'><img src={twitter} alt="twitter" /></a>
              <a href='https://www.linkedin.com/in/gbadamosi-sofiyat-73104a224/'><img src={linkedin} alt="linkedin"/></a>
              <a href='tel:+2347088643717'><img src={tel} width ="8%" alt="tel" /></a> 
            </ul>
         </nav>
     </header>
<div id='nxtsec'>
     <h3>About Me</h3>
        <p> I'm a Front-end web developer and as well as a Database Administrator. I am
                 working towards becoming a full stack Software Developer. I also have the
                 ability to create graphics for businesses and individuals.
                 <br></br>
                 <a href='https://mail.google.com/mail/u/0/#inbox'><img src={email} width ="7%" alt="email" /><br>
                 </br><i>sofiyatgbadamosi@gmail.com</i></a>
        </p>
</div>

    <div className='float-container'>
    <h2>My Skills</h2>
        <div className='float-child'>
            <h4>HTML</h4>
                <div className='content'>
                    <div class="skills html">98%</div>
                </div>
            <h4>CSS</h4>
                <div className='content'>
                    <div class="skills css">95%</div>
                </div>
            <h4>PHP</h4>
                <div className='content'>
                    <div class="skills php">90%</div>
                </div>
            <h4>MYSQL</h4>
                <div className='content'>
                    <div class="skills mysql">90%</div>
                </div>
        </div>
        <div className='rhs'>
            <h4>PYTHON</h4>
                <div className='content'>
                    <div class="skills python">80%</div>
                </div>
            <h4>JavaScript</h4>
                <div className='content'>
                    <div class="skills js">55%</div>
                </div>
            <h4>Reactjs</h4>
                <div className='content'>
                    <div class="skills reactjs">45%</div>
                </div>
        </div>
    </div>

<div className='float'>
<hr></hr>    
    <h2>Education</h2>
            <ul>
                <li>Royal Race Group of School - Primary School</li>
                <li>Pace Setter Secondary School - Secondary School</li>
                <li>Ladoke Akintola University of Technology - Higher Institution</li>
                <li><i>Currently an 100level Student at Ladoke Akintola University Of Technology, Computer Science Department.</i></li>
            </ul>
<hr></hr> 
    <h2>Training</h2>   
        <ul>
            <li>At Prudence Interconnectivity Computers - HTML, CSS, PHP, MYSQL</li>
            <li>Self Taught - PYTHON, JAVASCRIPT</li>
            <li>At SideHustle Internship Cohort 6.0 - Reactjs</li>
            <li><i>Currently an Alpha Clan at SideHustle Internship Cohort 6.0 /Reactjs stack/</i></li>
        </ul>
</div>

<footer>&copy; Sofiyat  2022</footer> 
</div>
    }


export default Homepage;