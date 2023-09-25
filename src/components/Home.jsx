import React from 'react';
import Footer from './Footer';
import { FaHeadphones,FaClock,FaUserNurse,FaUser,FaFlag,FaRibbon,FaGlobe,FaFlask,FaHeartPulse,FaTooth,FaCrutch,FaBrain,FaDna,FaQuoteRight} from "react-icons/fa6";
import thumb1 from '../images/test-thumb1.jpg';
import thumb2 from '../images/test-thumb2.jpg'
import one from '../images/1.png'
import two from '../images/2.png'
import three from '../images/3.png'
import four from '../images/4.png'
import five from '../images/5.png'
import six from '../images/6.png'
import seven from '../images/7.png'
const Home = () => {
    
  return (
    <section>
        <div className="home1">
	<div className="block">
	<div className="line"></div>
	<p>TOTAL HEALTH CARE SOLUTION</p>
	<h1>Your Most Trusted Health Partner</h1> 	
	<p>A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.
	</p> 
	<div className="btn1">
		<a href="#MAKE" style={{textDecoration:'none',color:'white'}}>MAKE APPOINTMENT</a>	
	</div>
</div> 
</div> 

{/* three flex boxes */}
<div className="three_flex">
	<div className="flex1">
		<div className="transone">		
        <FaUserNurse className='fas' />
		<h1 className="head"><span>24 Hours Service</span><br/>Online Appoinment</h1>
		<p className="para1">Get ALl time support for emergency.We have introduced the principle of family medicine.</p>
		<div className="btn1">
			<a href="#MAKE" style={{textDecoration:'none',color:'whitesmoke'}}>MAKE A APPOINTMENT</a>
			</div>	
	</div>
    </div>
    <div className="flex2">
		<div className="transtwo">
        <FaClock className='far'/>
<div className="flex2head2">
<h1 className="head2"><span>Timing schedule</span><br/>Working Hours</h1>
	<ul>
		<li>
			Sun - Wed :
			<span>8:00 - 17:00</span>
		</li>
		<li>
			Thu - Fri :
<span>9:00 - 17:00</span>
		</li>
		<li>
			Sat - SUN :
<span>10:00 - 17:00</span>
		</li>
	</ul>
	</div>	
</div>
</div>
<div className="flex3">
		<div className="transthree">
		<FaHeadphones className='far'/>
		<h1 className="head3"><span>Emegency Cases</span><br></br>
1-800-700-6200</h1>
<p>Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</p>
	</div>
</div>
	</div>

    {/* <!-------- middle section home -------------------> */}

<div className="main_middle">
	<div className="three_image_container">
		<div className="two_image_container">
			<div className="first_image"></div>
			<div className="second_image"></div>
		</div>
		<div className="third_image"></div>
	</div>
	<div className="text">
<div className="transfour">
<h1>Personal care<br/>
& healthy living</h1>
<p>We provide best leading medicle service Nulla
	perferendis veniam deleniti ipsum officia
	 dolores repellat laudantium obcaecati neque.</p>
		<div className="btn3">
			<a href="#SERVICES" style={{textDecoration:'none',color:'white'}}>SERVICES </a>
			
			</div>
		</div>
	</div>
	</div><br/>
{/* ------------ below middle section ----------------- */}
<div className="padding">
<div className="below_middle_section">
	<div className="bg_color">
		<div className="first_two_container">
			<div className="happy_people">
            <FaUser className='fas fa-user-md'/>
				<h3 id='Five'>58<span>k</span></h3>
				<p>Happy people</p>
			</div>
			<div className="surgery_comp">
				<FaFlag className='fas fa-flag'/>
				<h3 id='Seven'>700<span>+</span></h3>
				<p>Surgery Completed</p>

			</div>
		</div>

<div className="last_container">
	<div className="ex_doctors">
			<FaRibbon className='fas fa-ribbon'/>
			<h3 id='Four'>40<span>+</span></h3>
				<p>Expert Doctors</p>
	</div>
	<div className="world_wide">
		<FaGlobe className='fas fa-globe'/>
		<h3 id='Two'>20</h3>
		<p>WorldWide Branch</p>
	</div>
</div>	

	</div>
	</div>
</div>
  

{/* <!-------------------- second box---------------------- --> */}
 <div className="mainbox_two">
	<div className="divheader">
	<h1>Award winning patient care</h1>
	<div className="border"></div>
	<p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt <br/>molestias nostrum laudantium. Maiores porro cumque quaerat.</p></div>
	<div className="mainbox_three_flex">
		<div className="flexbox1">
			<div className="iconflex1">
                <FaFlask className="far fa-flask"/>&nbsp; &nbsp;
				<h4>Laboratory services</h4>
			</div>
			<p>Saepe nulla praesentium eaque omnis <br/>perferendis a doloremque.</p>	
		</div>

		<div className="flexbox2">
			<div className="iconflex1">
                <FaHeartPulse className="fas fa-heartbeat" /> &nbsp; &nbsp;
				<h4>Heart Disease</h4>
			</div>
			<p>Saepe nulla praesentium eaque omnis<br/> perferendis a doloremque.</p>
		</div>
		<div className="flexbox3">
			<div className="iconflex1">
                <FaTooth className="fas fa-tooth"></FaTooth>&nbsp; &nbsp;
				<h4>Dental Care</h4>
			</div>
			<p>Saepe nulla praesentium eaque omnis <br/>perferendis a doloremque.</p>
		</div>
	</div>

	<div className="mainbox_three_flex">
		<div className="flexbox4">
			<div className="iconflex1">
                <FaCrutch  className="fas fa-crutch"></FaCrutch>&nbsp; &nbsp;
				<h4>Body Surgery</h4>

			</div>
			<p>Saepe nulla praesentium eaque omnis<br/> perferendis a doloremque.</p>
			
		</div>

		<div className="flexbox5">
			<div className="iconflex1">
                <FaBrain className="far fa-brain"></FaBrain> &nbsp; &nbsp;
				<h4>Neurology Surgery</h4>

			</div>
			<p>Saepe nulla praesentium eaque omnis<br/> perferendis a doloremque.</p>
			
		</div>

		<div className="flexbox6">
			<div className="iconflex1">
                <FaDna className="fas fa-dna"></FaDna>&nbsp; &nbsp;
				<h4>Gynecology</h4>

			</div>
			<p>Saepe nulla praesentium eaque omnis<br/> perferendis a doloremque.</p>
			
		</div>
	</div>
</div>


{/* <!-- form table  --> */}
 <div className="form_table">
	<div className="img_num_box">
	<div className="img1"></div>
	<div className="phonenumber">
		<i className="fas fa-phone-alt"></i>
		<h1>+23 345 67980</h1>
	 </div>
</div>

<form>
	<h1>Book appoinment</h1>
	<p>Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti<br/> qui velit . Iste dolorum atque similique praesentium soluta.</p>

	<select name="Software Design">
		<option>Software design</option>
		<option>Choose Department</option>
		<option>Development cycle</option>
		<option>Software development</option>
		<option>Mainteance</option>
		<option>Process query</option>
		<option>Cost and Duration</option>
		<option>Modal delivery</option>
	</select>&nbsp; &nbsp;

	<select name="Select Doctor">
		<option>Select Doctor</option>
		<option>Choose Department</option>
		<option>Development cycle</option>
		<option>Software development</option>
		<option>Mainteance</option>
		<option>Process query</option>
		<option>Cost and Duration</option>
		<option>Modal delivery</option>
	</select>
	<br/>
	
	<input type="date" name="date" placeholder="dd/mm/yy"></input>&nbsp; &nbsp;

	<input type="time" name="time" placeholder="time"></input>
	<br/>
	<input type="text" name="name" placeholder="Fullname"></input>&nbsp; &nbsp;
	<input type="age" name="age" placeholder="Age"></input>
	<br/>
	<textarea rows="10" cols="10" placeholder="Your message"></textarea>
	<div className="btn5">
		<a href="#MAKE" style={{color:'white',textDecoration:'none'}}>MAKE APPOINTMENT</a>
		 
	</div>

</form>
</div>


{/* <!--  below form table --> */}
 <div className="below_form_table">
	<div className="below_form_table_head">
		<h1>We served over 5000+ Patients</h1>
		<div className="below_form_table_block"></div>
		<p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt <br/>molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
	</div>


<div className="below_form_table_flex">
	<div className="slider_flex">


		<div className="slider_flexbox1">
			<div className="image_flex">
			<img src={thumb1} height="80px" width="80px" alt='women'></img>
			<h3>Amazing service!<br/><span className="john">John Partho</span></h3></div>
			<p>They provide great service facility consectur adispicing elt.<br/>Itaque rem,prasentium,iure,ipsum magnum dlenti a vel<br/>eos adipsci suscipit fugit placetat</p>
			<FaQuoteRight className="fas fa-quote-right"></FaQuoteRight>
		</div>

		<div className="slider_flexbox1">
			<div className="image_flex">
			<img src={thumb2} height="80px" width="80px" alt='men'></img>
			<h3>Amazing service!<br/><span className="john">Mullar Sarth</span></h3></div>
			<p>They provide great service facility consectur adispicing elt.<br/>Itaque rem,prasentium,iure,ipsum magnum dlenti a vel<br/>eos adipsci suscipit fugit placetat</p>
            <FaQuoteRight className="fas fa-quote-right"></FaQuoteRight>
		</div>
	</div>
	</div>
</div>


{/* <!-- logo slide --> */}
  <div className="logo_slide">
	<div className="logo_slide_head">
		<h1>Partner Who Support US</h1>
		<div className="logo_slide_block"></div>
		<p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt <br/>molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
	</div>

<div className="slider">
	<div className="slide_track">
		<div className="slide">
			<img src={one} style={{height:'180px',width:'180px'}} alt='hello'></img>
		</div>
		<div className="slide">
			<img src={two} style={{height:'180px',width:'180px'}} alt='hello'></img>
		</div>
		<div className="slide">
			<img src={three} style={{height:'180px',width:'180px'}} alt='hello'></img>
		</div>
		<div className="slide">
			<img src={four} style={{height:'180px',width:'180px'}} alt='hello'></img>
		</div>
		<div className="slide">
			<img src={five}style={{height:'180px',width:'180px'}} alt='hello'></img>
		</div>
		<div className="slide">
			<img src={six} style={{height:'180px',width:'180px'}} alt='hello'></img>
		</div>
		<div className="slide">
			<img src={seven} style={{height:'180px',width:'180px'}} alt='hello'></img>
		</div>
		<div className="slide">
			<img src={one}style={{height:'180px',width:'180px'}} alt='hello'></img>
		</div>
		<div className="slide">
			<img src={two} style={{height:'180px',width:'180px'}} alt='hello'></img>
		</div>
		<div className="slide">
			<img src={three} style={{height:'180px',width:'180px'}} alt='hello'></img>
		</div>
		<div className="slide">
			<img src={four} style={{height:'180px',width:'180px'}} alt='hello'></img>
		</div>
		<div className="slide">
			<img src={five} style={{height:'180px',width:'180px'}} alt='hello'></img>
		</div>
		<div className="slide">
			<img src={six} style={{height:'180px',width:'180px'}} alt='hello'></img>
		</div>
		<div className="slide">
			<img src={seven} style={{height:'180px',width:'180px'}} alt='hello'></img>
		</div>
		<div className="slide">
			<img src={one} style={{height:'180px',width:'180px'}} alt='hello'></img>
		</div>
	</div>
</div>
</div> 






{/* footer */}
     <Footer/>

    </section>
  )
}


export default Home