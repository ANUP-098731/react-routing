import React from 'react'
import Footer from './Footer'

const Services = () => {
  return (
    <section>
{/* <!-- aboutdiv --> */}
<div className="aboutdiv">
  <div className="bgcolor2">
    <div className="about"> 
  <p>Our services</p>
  <h1>What We Do</h1>
    </div>
    </div>
</div>
{/* <!-- disease --> */}
	<div className="disease">
		<div className="disease_flex">
			<div className="maindisease">
			<div className="disease_flexbox1">
				<div className="child">
					<div className="service-1"></div>
				</div>
				<h3>Child Care</h3>
				<p>Saepe nulla praesentium eaque omnis<br/> perferendis a doloremque.</p>
			</div>

			<div className="disease_flexbox1">
				<div className="child">
					<div className="service-2"></div>
				</div>
				<h3>Personal Care</h3>
				<p>Saepe nulla praesentium eaque omnis<br/> perferendis a doloremque.</p>
			</div>

			<div className="disease_flexbox1">
				<div className="child">
					<div className="service-3"></div>
				</div>
				<h3>CT scan</h3>
				<p>Saepe nulla praesentium eaque omnis<br/> perferendis a doloremque.</p>
			</div>
		</div>
		<div className="maindisease">
		<div className="disease_flexbox2">
			<div className="child">
					<div className="service-4"></div>
				</div>
				<h3>Joint replacement</h3>
				<p>Saepe nulla praesentium eaque omnis<br/> perferendis a doloremque.</p>
			</div>

			<div className="disease_flexbox2">
			<div className="child">
					<div className="service-6"></div>
				</div>
				<h3>Examination & Diagnosis</h3>
				<p>Saepe nulla praesentium eaque omnis<br/> perferendis a doloremque.</p>
			</div>

<div className="disease_flexbox2">
			<div className="child">
					<div className="service-8"></div>
				</div>
				<h3>Alzheimer's disease</h3>
				<p>Saepe nulla praesentium eaque omnis<br/> perferendis a doloremque.</p>
			</div>
		</div>
		</div>
	</div>
	{/* <!-- end disease --> */}

  {/* <!-- banner --> */}

<div className="banner">
	<div className="bannerone">
	<div className="banner_block"></div>
	<h1>We are pleased to offer<br/><span className="you">you the chance to have the<br/> healthy</span></h1>
	<div className="servicebtn">
		<a href="#MAKE" style={{color:'whitesmoke',textDecoration:'none'}}>MAKE APPOINTMENT </a>
	</div>
	</div>
</div>
<Footer/>
    </section>
  
  )
}

export default Services 