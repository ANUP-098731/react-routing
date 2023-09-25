import React from 'react';
import Footer from './Footer';
import { FaHeadset,FaInbox } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section>
      {/* <!-- aboutdiv --> */}
	<div className="aboutdiv">
		<div className="bgcolor2">
			<div className="about">
		<p>Our services</p>
		<h1>Get In Touch</h1>
			</div>
			</div>
	</div>
  {/* <!-- contact --> */}

	<div className="contact">
		<div className="contact_flex">
      < FaHeadset className="fas fa-headset"/>
			<h3>Call US</h3>
			<p>+823-4565-13456</p>	
		</div>
		<div className="contact_flex">
      <FaInbox className="fas fa-inbox"/>
			<h3>Email me</h3>
			<p>contact@mail.com</p>
		</div>
		<div className="contact_flex">
      <FaLocationDot className="fas fa-map-marker"/>
			<h3>Location</h3>
			<p>North Main Street,Brooklyn Australia</p>
		</div>
	</div>

  {/* <!-- contact us --> */}

<div className="contactus">
	<div className="contactus_head">
		<h1>Contact us</h1>
		<div className="contactus_block"></div>
		<p>Laboriosam exercitationem molestias beatae eos pariatur, similique,<br/> excepturi mollitia sit perferendis maiores ratione aliquam?</p>
	</div>
	
	<form className="last_form">
		<input type="text" name="name" placeholder="Your Full Name"></input>&nbsp; &nbsp;
		<input type="email" name="email" placeholder="Your Email Address"></input>&nbsp;<br/><br/>
		<input type="text" name="name" placeholder="Your Query Topic"></input>&nbsp; &nbsp;
		<input type="number" name="number" placeholder="Your Phone Number"></input>&nbsp;<br/><br/>
		<textarea rows="10" cols="10" placeholder="Your message"></textarea>
	</form>
	<div className="formbtn">
		<a href="#" style={{color:'whitesmoke',textDecoration:'none'}}>	SEND MESSAGE </a>

		
	</div>
</div>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2153345009037!2d72.8521856!3d19.2294449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d42c95bdf9%3A0x5a3374a957943f4b!2sTryCatch%20Classes%20%7C%20Full%20Stack%20Web%20Development%20%7C%20Data%20Science%20Python%20%7C%20Software%20Testing%20%7C%20Android%20IOS%20Flutter!5e0!3m2!1sen!2sin!4v1670973515253!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>



  <Footer/>
    </section>
  )
}

export default Contact