import React from 'react'
import logo from '../images/logo.png'
import {FaTwitter,FaFacebook,FaInstagram,FaHeadset,FaEnvelope} from 'react-icons/fa6'


const Footer = () => {
  return (
    <section>
        <div className="footer">
	<div className="footer_flex">
		<div className="novena">
			<img src={logo} alt='logo'></img>
			<p>Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.</p>
			<div className="button">

				<button><a href="#twitter"><FaTwitter style={{color:'white'}}/></a></button>
				<button><a href="#facebook"><FaFacebook style={{color:'white'}}/></a></button>
				<button><a href="#instagram"><FaInstagram style={{color:'white'}}/></a></button>
		</div>
		</div>
		<div className="Department">
			<h4>Department</h4>
			<div className="dept_block"></div>
			
			<p><a href="#Surgery">Surgery</a></p>
			<p><a href="#Women">Women health</a></p>
			<p><a href="#Radiology">Radiology</a></p>
			<p><a href="#Cardioc">Cardioc</a></p>
			<p><a href="#Medicine">Medicine</a></p>
		</div>
	</div>
	<div className="footer_flex">
		<div className="Support">
			<h4>Support</h4>
			<div className="dept_block"></div>
			
			<p><a href="#Terms">Terms & Condition</a></p>
			<p><a href="#Privacy">Privacy Policy</a></p>
			<p><a href="#Company">Company Support</a></p>
			<p><a href="#AQuestions">FAQuestions</a></p>
			<p><a href="#Company">Company License</a></p>
		</div>
		<div className="get_in_touch">
			<h4>Get In Touch</h4>
			<div className="dept_block"></div>
			<div className="envelope">
			<FaEnvelope/>
			<span>Support Available for 24/7</span>
			<h2>Support@email.com</h2>
			<FaHeadset/>
			<span>Mon to Fri : 08:30 - 18:00</span>
			<h2>+23-456-6588</h2>
		</div>
	</div>	

	
</div> 
</div>

{/* copyright */}
<div className="copyright">
	<div className="theme">
		<p>Copyright Reserved to Novena by <span>Themefisher</span></p></div>
		<form className="subscribe">
		<input type="email" name="email" placeholder="EMAIL ADDRESS"></input>
		<button className="red"><a href="#SUBSCRIBE">SUBSCRIBE</a></button>
	</form>
</div>
<div className="end">
	<p>Distributed by <span>Themewagon</span></p>

</div>
</section>
    
    

  )
}

export default Footer