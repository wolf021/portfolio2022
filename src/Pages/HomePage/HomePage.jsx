import React from 'react'
import Card from '../../Componets/Card/Card'
import ToolCard from '../../Componets/ToolCard/ToolCard'
import './homePage.css'
import ReactIcon from '../../../src/Assets/Images/Icons/Vector.png';
import HtmlIcon from '../../Assets/Images/Icons/html.png';
import CssIcon from '../../Assets/Images/Icons/css.png';
import JsIcon from '../../Assets/Images/Icons/js.png';
import NodeIcon from '../../Assets/Images/Icons/node.png';
import Figmacon from '../../Assets/Images/Icons/figma.png';
import ReduxIcon from '../../Assets/Images/Icons/redux.png';
import Scsscon from '../../Assets/Images/Icons/scss.png';
import ScreenIcon from '../../Assets/Images/Icons/screen.png';
import CellIcon from '../../Assets/Images/Icons/cellphone.png';
import TestimonialCard from '../../Componets/TestimonialCard/TestimonialCard';
import ContactForm from '../../Componets/ContactForm/ContactForm';
import facebook from '../../Assets/Images/Icons/facebook.png'
import instagram from '../../Assets/Images/Icons/Instagram.png'
import whatsapp from '../../Assets/Images/Icons/whatsapp.png'
import linkedin from '../../Assets/Images/Icons/linkedin.png'

const HomePage = () => {
  return (
    
<div className="home">

<section className="hero-section" id='hero' >

    <div className="info-container">
        <p className="before-title">
            I am a 
        </p>
        <h3 className="info-title">
            Web  <strong className='info-title-dev' style={{color:"red"}}>Developer </strong> <br/> & <strong className='info-title-des' >Designer</strong>
        </h3>
    </div>
<div className="social-media">
    <div className="social-media-conainer">
        <a  href='https://www.facebook.com/tayyabi1/'>
        <div className="facebook">
            <img src={facebook} alt="facebook" />
        </div>
        </a>
       <a href='https://www.instagram.com/iqbal.tayyab/'>
       <div className="facebook">
        <img src={instagram} alt="instagram" />
        </div>
       </a>
        <a href="https://www.linkedin.com/in/tayyab-iqbal-a6a77172/">
        <div className="facebook">
        <img src={linkedin} alt="linkedin" />
        </div>
        </a>
        <a href="https://wa.me/00923214308481?text=Send20%a20%quote"> <div className="facebook">
        <img src={whatsapp} alt="whatsapp" />
        </div></a>
       
        
    </div>
</div>
</section>
<div id='services' ><br/> <br/> <br/> <br/> <br/> <br/> <br/></div>
<section className="services-section" >
<h3 className="services-title">
    Services
</h3>
<br/>

<p className="services-info">
    We <strong style={{color:"red"}}>Provide</strong> the following Services
</p>
<div className="services-cards">
    <Card  CardImage={ScreenIcon} Title="Web Development" Description="We Provide Web Development Services to the People" />
    <Card CardImage={CellIcon} Title="App Development" Description="We Provide Web Development Services to the People" />
    <Card  CardImage={ScreenIcon} Title="Web/App Designing" Description="We Provide Web Development Services to the People" />
    
</div>
</section>

<section className="tools-section" id="tools">
    <br/> <br /> <br /> <br /><br /><br /><br />
<h3 className="tools-title">
    Tools
</h3>
<br/>
<p className="tools-info">
    Tools I <strong style={{color:"red"}}>Use</strong>  to Develop & Design
</p>
<div className="tools-container">
   <ToolCard ToolsTitle="Html" ToolIcon={HtmlIcon} />
   <ToolCard ToolsTitle="Css" ToolIcon={CssIcon} />
   <ToolCard ToolsTitle="JS" ToolIcon={JsIcon} />
   <ToolCard ToolsTitle="React" ToolIcon={ReactIcon} />
   <ToolCard ToolsTitle="Redux" ToolIcon={ReduxIcon} />
   <ToolCard ToolsTitle="Node" ToolIcon={NodeIcon} />
   <ToolCard ToolsTitle="Scss" ToolIcon={Scsscon} />
   <ToolCard ToolsTitle="Figma" ToolIcon={Figmacon} />
</div>
</section>
<div  id='reviews' ><br/> <br/> <br/> <br/> <br/> <br/> <br/></div>
<section className="testimonial-section" >
<h3 className="testimonial-title">
    Testimonials
</h3>
<br/>
<p className="testimonial-info">
    Some of My <strong style={{color:"red"}}>Clients</strong>  Reviews
</p>
    <div className="testimonial-cards">
    <TestimonialCard TestimonialTitle="John Mark" TestimonialDescription="I am Happy with the service i have recieved from Iqbal." />
    <TestimonialCard TestimonialTitle="Steve Clarkson" TestimonialDescription="He is Good at what he Does and a good person." />
    <TestimonialCard TestimonialTitle="Claudia Harris" TestimonialDescription="Iqbal, Deliver on Time and can make pixel perfect Designs." />
    
    </div>
</section>
<div id="Contact" ><br/> <br/> <br/> <br/> <br/> <br/> <br/></div>
<section className="contact-section" >
<h3 className="testimonial-title">
    Contact Form
</h3>
<br/>
<p className="testimonial-info">
    Have Something in <strong style={{color:"red"}}>Mind</strong> Contact
</p>
    <ContactForm />
</section>
</div>
  )
}

export default HomePage