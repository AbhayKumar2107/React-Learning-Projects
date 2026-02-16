import { getLanguageValue } from "./languageContext";
import { getThemeValue } from "./themeContext";

export const Navbar = () => {
  const { theme, changeTheme } = getThemeValue();
  const { language } = getLanguageValue();


  return (
      <div className="navbar">
        <span>Dialecto</span>
        <div className="right">
          <button onClick={changeTheme}>
            {theme === "light" ? "Dark" : "Light"} Theme
          </button>
          <span>{language}</span>
        </div>
      </div>
  );
};
