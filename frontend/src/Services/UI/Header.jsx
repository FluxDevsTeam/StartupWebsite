import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";
import NavToggleButton from "./NavToggleButton";

function Header() {
	return (
		<header className='flex items-center h-[68px] bg-[var(--bg-color-100)] sticky top-0 shadow-lg px-6 z-[99]'>
			<Link
				to='/'
				className='block mr-auto'>
				<Logo />
			</Link>
			<nav className='md:flex items-center justify-center w-1/2 mr-auto hidden'>
				<li className='mr-6 list-none'>
					<NavLink
						className='capitalize text-lg text-[var(--text-color)] font-semibold transition-colors duration-200'
						to='/home'>
						Home
					</NavLink>
				</li>
				<li className='mr-6 list-none'>
					<NavLink
						className='capitalize text-lg text-[var(--text-color)] font-semibold transition-colors duration-200'
						to='about'>
						About us
					</NavLink>
				</li>
				<li className='mr-6 list-none'>
					<NavLink
						className='capitalize text-lg text-[var(--text-color)] font-semibold transition-colors duration-200'
						to='services'>
						Services
					</NavLink>
				</li>
				<li className='mr-6 list-none'>
					<NavLink
						className='capitalize text-lg text-[var(--text-color)] font-semibold transition-colors duration-200'
						to='projects'>
						Our Projects
					</NavLink>
				</li>
			</nav>

			<div className='hidden md:flex items-center gap-4'>
				<ThemeToggleButton />
				<Link
					className='capitalize text-lg text-white font-semibold bg-[#4144bd] px-4 py-2 rounded-lg hover:bg-[#31349b] transition-colors duration-200'
					to='contact'>
					contact us
				</Link>
			</div>
			<NavToggleButton
				icon={
					<GiHamburgerMenu className='text-[var(--text-color)] text-2xl' />
				}
			/>
		</header>
	);
}
export default Header;
