import React from 'react';
import "./NavBar.css";



function Navbar2() {

return (

<>

<nav>

<div className="navbar-container " id='navbarid'>

<div id="logo">

<a href="#home">

<h3>Sign up for Daily insider </h3></a>

</div>

<div className="input">



<input type="text" placeholder='Enter your email' />
<button type="button">Subscribe Here</button> 
</div>



</div>

</nav>

</>

)

}

export default Navbar2