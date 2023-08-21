import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "@components/common/Header";
import MainPage from "@pages/MainPage";
import LoginPage from "@pages/LoginPage";
import SignupPage from "@pages/SignupPage";

const App = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  );
};

export default App;
