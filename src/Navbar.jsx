import React from 'react'
import "./NavBar.css"
import { PopupButton } from 'react-calendly'
function Navbar() {
	return (
		<nav className='navbar'>
			<a href="#" className='logo'>Fibery</a>
			<input type="checkbox" id='toggler' />
			<label for="toggler"><i className='ri-menu-line'></i></label>
			<div className='menu'>
				<ul className='list'>
					
					<li id='popbtn'><PopupButton
						url="https://calendly.com/anurag1705094"
						rootElement={document.getElementById("root")}
						text="Schedule Meeting"
					/></li>
					<li><a href="">Home</a></li>
					<li><a href="#">Contact</a></li>
					<li><a href="#">Log in</a></li>
				</ul>
			</div>

		</nav>
	)
}

export default Navbar
