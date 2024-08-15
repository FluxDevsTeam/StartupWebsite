import { useAppContext } from "../../Services/ContextProvider";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggleButton() {
	const { theme, toggleTheme } = useAppContext();
	return (
		<button
			className='grid place-items-center w-8 h-8 rounded-lg text-[var(--text-color)] text-xl'
			onClick={toggleTheme}>
			{theme === "light" ? <FaMoon /> : <FaSun />}
		</button>
	);
}
export default ThemeToggleButton;
