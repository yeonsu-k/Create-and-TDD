import React, { createContext } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { Global } from "@emotion/react";
import { GlobalStyle } from "@styles/global-styles";
import { lightTheme, darkTheme, Theme } from "@styles/theme";
import { useDarkMode } from "@hooks/useDarkMode";
import DarkModeToggle from "@components/darkmodeToggle";
import MainPage from "@pages/MainPage";
import LoginPage from "@pages/LoginPage";
import SignupPage from "@pages/SignupPage";
import "@styles/Font.scss";

interface ContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

//contextX객체 생성
export const ThemeContext = createContext<ContextProps>({
  theme: lightTheme,
  toggleTheme: () => {
    return null;
  },
});

const App = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Global styles={GlobalStyle(theme === lightTheme ? lightTheme : darkTheme)} />
        <DarkModeToggle />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Link to="/home">Main</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
