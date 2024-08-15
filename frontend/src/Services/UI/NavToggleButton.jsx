import { useAppContext } from "../ContextProvider";

function NavToggleButton({ icon }) {
	const { theme, handleToggle } = useAppContext();

	return (
		<button
			className={`w-10 h-10 text-xl rounded-md p-2 grid place-items-center border border-solid border-[var(--bg-color-400)] md:hidden ${
				theme === "light"
					? "bg-[var(--blue-primary)]"
					: "bg-transparent"
			}cursor-pointer`}
			onClick={handleToggle}>
			{icon}
		</button>
	);
}
export default NavToggleButton;
