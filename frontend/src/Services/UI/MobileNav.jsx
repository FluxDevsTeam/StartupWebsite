import { NavLink, Link } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";
import { useAppContext } from "../ContextProvider";
import NavToggleButton from "./NavToggleButton";
import { FaTimes } from "react-icons/fa";
// import { useEffect, useRef, useState } from "react";

function MobileNav() {
	const { toggle, handleToggle } = useAppContext();

	/*
  I am trying to implement the feature that closes the mobile navBar when the user clicks outside or scrolls
	const [isOpen, setIsOpen] = useState(toggle);
	const navRef = useRef(null);

	function handleClick() {
		handleToggle();

		setIsOpen(toggle);
	}

	useEffect(() => {
		function handleOutsideClick(event) {
			if (navRef.current && !navRef.current.contains(event.target)) {
				handleClick();
			}
		}

		function handleScroll() {
			handleClick();
		}

		window.addEventListener("scroll", handleScroll);
		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);
  */

	return (
		<nav
			// ref={navRef}
			role='navigation'
			aria-label='Mobile Navigation'
			className={`w-[250px] h-screen bg-[var(--bg-color-100)] shadow-lg px-12 py-8 transform transition duration-200 ease-linear fixed md:hidden top-0 right-0 z-[999] ${
				toggle ? "translate-x-0" : "translate-x-full"
			}`}>
			<div className='flex items-center justify-between w-full mb-12'>
				<ThemeToggleButton />
				<Link
					className='capitalize text-md text-white font-semibold bg-[#4144bd] px-2 py-1 rounded-lg hover:bg-[#31349b] transition-colors duration-200'
					to='contact'>
					contact us
				</Link>
			</div>

			<ul className='flex flex-col gap-4 list-none mb-6'>
				<li
					className='mr-6 list-none'
					onClick={handleToggle}>
					<NavLink
						className='capitalize text-lg text-[var(--text-color)] font-semibold transition-colors duration-200'
						to='/home'>
						Home
					</NavLink>
				</li>
				<li
					className='mr-6 list-none'
					onClick={handleToggle}>
					<NavLink
						className='capitalize text-lg text-[var(--text-color)] font-semibold transition-colors duration-200'
						to='about'>
						About us
					</NavLink>
				</li>
				<li
					className='mr-6 list-none'
					onClick={handleToggle}>
					<NavLink
						className='capitalize text-lg text-[var(--text-color)] font-semibold transition-colors duration-200'
						to='services'>
						Services
					</NavLink>
				</li>
				<li
					className='mr-6 list-none'
					onClick={handleToggle}>
					<NavLink
						className='capitalize text-lg text-[var(--text-color)] font-semibold transition-colors duration-200'
						to='projects'>
						Our Projects
					</NavLink>
				</li>
			</ul>

			<NavToggleButton
				icon={<FaTimes className='text-[var(--text-color)] text-2xl' />}
			/>
		</nav>
	);
}
export default MobileNav;
