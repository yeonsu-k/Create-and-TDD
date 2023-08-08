import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import MainPage from "pages/MainPage";
import LoginPage from "pages/LoginPage";
import SignupPage from "pages/SignupPage";

const App = () => (
  <>
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Link to="/">Main</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  </>
);

export default App;
