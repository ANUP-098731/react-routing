import React from 'react';
import Footer from './Footer';
import './Style.css';
import AboutOne from '../images/about-1.jpg';
import AboutTwo from '../images/about-2.jpg';
import Aboutythree from '../images/about-3.jpg';
import AboutFour from '../images/about-4.jpg';
import sign from '../images/sign.png';
import one from '../images/1.jpg'
import two from '../images/2.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'



const About = () => {
  return (
    <section>
      {/* <!-- aboutdiv --> */}
	<div className="aboutdiv">
		<div className="bgcolor2">
			<div className="about">
				<p>About us</p>
				<h1>About US</h1>
			</div>
			</div>
	</div>

  {/* <!-- Personal care --> */}

	<div className="personal_care">
		<div className="personal_care_flex">
			<h1>Personal care<br/> for your healthy <br/>living</h1>
		</div>
		<div className="sign">
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quod laborum alias. Vitae dolorum,<br/> officia sit! Saepe ullam facere at, consequatur incidunt, quae esse, quis ut reprehenderit dignissimos,<br/> libero delectus.</p>
		<img src={sign} style={{height:"100px", width:"200px"}} alt='hello'></img>
	</div>
</div>
<div className="fourimage_flex">
	<div className="fourimage_flex_box1">
	<img src={AboutOne} height="180px" width="250px" alt='hello'></img>
	<h3 style={{fontSize:'20px'}}>Healthcare for Kids</h3>
	<p>Voluptate aperiam esse possimus <br/>maxime repellendus, nihil quod<br/> accusantium .</p>
</div>
<div className="fourimage_flex_box2">
	<img src={AboutTwo} height="180px" width="250px"  alt='hello'></img>
	<h3 style={{fontSize:'20px'}}>Medical Counseling</h3>
	<p>Voluptate aperiam esse possimus <br/>maxime repellendus, nihil quod<br/> accusantium .</p>
</div>
<div className="fourimage_flex_box3">
	<img src={Aboutythree} height="180px" width="250px"  alt='hello'></img>
	<h3 style={{fontSize:'20px'}}>Modern Equipments</h3>
	<p>Voluptate aperiam esse possimus <br/>maxime repellendus, nihil quod<br/> accusantium .</p>
</div>
<div className="fourimage_flex_box4">
	<img src={AboutFour} height="180px" width="250px"  alt='hello'></img>
	<h3 style={{fontSize:'20px'}}>Qualified doctors</h3>
	<p>Voluptate aperiam esse possimus <br/>maxime repellendus, nihil quod<br/> accusantium .</p>
</div>
</div>

{/* <!-- ourdoctors --> */}


<div className="ourdoctors_flex">
	<div className="ourdoctors_flexbox1">
			<h1>Our Doctors <br/>achievements</h1>
			<div className="ourdoctors_block"></div>
	</div>
	<div className="six_image">
	<div className="logo_flexbox1">
		<div className="three_image_one">
		</div>
		<div className="three_image_two">
		</div>
		<div className="three_image_three">
		</div>
	</div>

<div className="logo_flex2">
	<div className="three_image_four">
		</div>
		<div className="three_image_five">
		</div>
		<div className="three_image_six">
		</div>
	</div>
</div>
</div>

{/* <!-- ------------------------meet our special --> */}


	

	<div className="meet_our_special">
		<div className="meet_our_special_head">
			<h1>Meet Our Specialist</h1>
			<div className="meet_our_special_block"></div>
			<p>Today’s users expect effortless experiences. Don’t let essential people and<br/> processes stay stuck in the past. Speed it up, skip the hassles</p>
		</div>
	
		
		<div className="doctor_name_flex">
			<div className="doctor_name_flexbox1">
				<img src={one} width="250px" alt='about'></img>
				<h3>John Marshal</h3>
				<p>Internist, Emergency Physician</p>
			</div>
			<div className="doctor_name_flexbox1">
				<img src={two} width="250px" alt='about'></img>
				<h3>Marshal Root</h3>
				<p>Surgeon, Сardiologist</p>
			</div>
			<div className="doctor_name_flexbox1">
				<img src={three} width="250px" alt='about'></img>
				<h3>Siamon john</h3>
				<p>Internist, Emergency Physician</p>
			</div>
			<div className="doctor_name_flexbox1">
				<img src={four} width="250px" alt='about'></img>
        <h3>Alex john</h3>
				<p>Orthopedic Surgeon</p>
			</div>
		</div>
</div>

{/* <!-- what they say about us --> */}
<div className="say_about_us">
	<div className="say_about_us_flex">
		<div className="about-2"></div>

<div className="expert_doctors">
		<h1>What they say about us</h1>
		<div className="say_block"></div>
		<h4>Expert Doctors!<br/><span>Mullar sparth</span></h4>

		<p>Today’s users expect effortless experiences. Don’t let essential <br/>people and processes stay stuck in the past. Speed it up, skip <br/>the hassles</p>
	</div>
</div>
</div>





  <Footer/>
  </section>
  )
}

export default About