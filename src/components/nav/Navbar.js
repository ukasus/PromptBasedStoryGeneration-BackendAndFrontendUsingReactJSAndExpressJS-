import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' activeStyle>
			Home (Stories)
		</NavLink>
		<NavLink to='/leaderboard' activeStyle>
			Leaderboard
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/storyForm'>Create Story</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
