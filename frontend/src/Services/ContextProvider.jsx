import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

function ContextProvider({ children }) {
	const [theme, setTheme] = useState(() => {
		// if the theme is already set in local storage, use it
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			return savedTheme;
		}

		// if the user's OS preference is dark, set the theme to dark
		if (
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			return "dark";
		}

		// if the user's OS preference is not dark, set the theme to light
		return "light";
	});

	const [toggle, setToggle] = useState(false);

	function handleToggle() {
		setToggle(!toggle);
	}

	function toggleTheme() {
		setTheme(theme === "light" ? "dark" : "light");

		//setting theme in local storage
		localStorage.setItem("theme", theme);
	}

	return (
		<AppContext.Provider
			value={{ theme, toggleTheme, toggle, handleToggle }}>
			{children}
		</AppContext.Provider>
	);
}

function useAppContext() {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppContext must be used within a ContextProvider");
	}
	return context;
}

export { ContextProvider, useAppContext };
