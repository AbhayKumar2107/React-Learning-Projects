import { createContext, useContext, useState } from "react";

export const themeContext = createContext();

// debug the below custom hook
export const getThemeValue = () => {
  const value = useContext(themeContext);
  return value;
};
// debug the below context Provider
export const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <themeContext.Provider value={{ theme, setTheme, changeTheme }}>
      {children}
    </themeContext.Provider>
  );
};
