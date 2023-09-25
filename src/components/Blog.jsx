import React from 'react';
import Footer from './Footer';
import BlogOne from '../images/blog-1.jpg';
import BlogTwo from '../images/blog-2.jpg';
import BlogThree from '../images/blog-4.jpg';
import { FaCommentAlt ,FaCalendarAlt} from "react-icons/fa";

const Blog = () => {
  return (
    <section>
      {/* <!-- aboutdiv --> */}
	<div className="aboutdiv">
		<div className="bgcolor2">
			<div className="about">
		<p>Our services</p>
		<h1>BLOG ARTICLES</h1>
			</div>
			</div>
	</div>

  <div className="mainblog">
	<div className="blogflexone">
		<div className="blogdivone">
		<div className="blog1_image">
			<img src={BlogOne}  style={{height:"600px", width:"680px"}} alt='blog'></img>
			</div>
		<div className="blogicon">
    <FaCommentAlt className="fas fa-comment-alt"/><span> 5 comments</span> &nbsp; &nbsp;
    <FaCalendarAlt  className="fas fa-calendar-alt"></FaCalendarAlt><span> 28th January</span>
		</div>
		<div className="blogtext">
			<h1>Choose quality service over cheap <br/>service all type of things</h1>
			<p>Lorem ipsum dolor sit amet, Blanditiis aliquid architecto facere commodi<br/>cupiditate omnis voluptatibus inventore atque velit cum rem id assumenda<br/> quam recusandae ipsam ea porro, dicta ad.</p>
		</div>
		<div className="blogbtn">
		<a href="#Read More" style={{color:'whitesmoke',textDecoration:'none'}}>	Read More</a>

		<i className="fa fa-chevron-right" aria-hidden="true"></i>
	</div>

	<div className="blog1_image">
			<img src={BlogTwo} style={{height:"600px", width:"680px"}}  alt='blog'></img>
			</div>
		<div className="blogicon">
    <FaCommentAlt className="fas fa-comment-alt"/><span> 5 comments</span> &nbsp; &nbsp;
    <FaCalendarAlt  className="fas fa-calendar-alt"></FaCalendarAlt><span> 28th January</span>
		</div>
		<div className="blogtext">
			<h1>Choose quality service over cheap <br/> service all type of things</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aliquid archit<br/> ecto facere commodi cupiditate omnis voluptatibus inventore atque velit cum<br/>  rem id assumenda quam recusandae ipsam ea porro, dicta ad.</p>
		</div>
		<div className="blogbtn">
		<a href="#Read" style={{color:'whitesmoke',textDecoration:'none'}}> More</a>
	</div>

	<div className="blog1_image">
			<img src={BlogThree} style={{height:"600px", width:"680px"}}  alt='blog'></img>
			</div>
		<div className="blogicon">
    <FaCommentAlt className="fas fa-comment-alt"/><span> 5 comments</span> &nbsp; &nbsp;
    <FaCalendarAlt  className="fas fa-calendar-alt"></FaCalendarAlt><span> 28th January</span>
		</div>
		<div className="blogtext">
			<h1>Choose quality service over cheap<br/> service all type of things</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis aliquid archi<br/> tecto facere commodi cupiditate omnis voluptatibus inventore atque velit cum<br/>  rem id assumenda qua m recusandae ipsam ea porro, dicta ad.</p>
		</div>
		<div className="blogbtn">
		<a href="#a" style={{color:'whitesmoke',textDecoration:'none'}}>Read More </a>
	
	
	</div>
	<div className="changebtn">
	<button><a href="blog.html" style={{textDecoration:'none'}}>1</a></button>
<button><a href="blog.html" style={{textDecoration:'none'}}>2</a></button>
<button><a href="blog.html" style={{textDecoration:'none'}}>3</a></button>
</div>
</div>

<div className="blogdivtwo">
	<div className="blogsearch">
		<h2>Search Here</h2>
		<div className="blogblock"></div>
		<form>
			<input type="text" name="text" placeholder="search here"></input>
		</form>
	</div>
	<div className="popular">
		<h2>Popular Posts</h2>
		<div className="blogblock"></div>

		<div className="headpopular">
			<span> 03 March 2018</span>
			<h3>Thoughtful living in los Angeles</h3>
		</div>
<div className="headpopular">
			<span> 03 March 2018</span>
			<h3>Thoughtful living in los Angeles</h3>
		</div>

		<div className="headpopular">
			<span> 03 March 2018</span>
			<h3>Thoughtful living in los Angeles</h3>
		</div>

		<div className="categories">
			<h2>Categories</h2>
			<div className="blogblock"></div>
			<p>Medicine (14)</p>
<p>Equipments (2)</p>
<p>Heart (10)</p>
<p>Free counselling (5)</p>
<p>Lab test (5)</p>
		</div>

		<div className="tags">
			<h2>Tags</h2>
			<div className="blogblock"></div><br/> 
			<button>Doctors</button> &nbsp; &nbsp;  
			<button>Agency</button>
			<br/> 
			<button>Medicine</button>&nbsp; &nbsp; 
			<button>Company</button>
			<br/> 
			<button>Surgery</button>&nbsp; &nbsp;
			<button>Marketing</button>
			<br/> 
			<button>Social media</button>&nbsp; &nbsp;
			<button>Branding</button>
			<br/> 
			<button>Laboratory</button>
		</div>
<div className="time">
	<h2>Time schedule</h2>
	<div className="blogblock"></div><br/> 

	<ul>
		<li>
		<a href="#a">Monday - Friday</a>
		<span className="blog_span">9:00 - 17:00</span></li>
		<li>
		<a href="#a">Saturday</a>
		<span className="blog_span">9:00 - 17:00</span></li>
		<li>
		<a href="#a">Sunday</a>
		<span className="blog_span">9:00 - 17:00</span></li>
	</ul>
<span>Need urgent help?</span>
<h4>+23-4565-65768</h4>
	</div>
	</div>
</div>
</div>
</div>



  <Footer/>
    </section>

  )
}

export default Blog