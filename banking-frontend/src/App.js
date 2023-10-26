import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import DashboardPage from "./pages/DashboardPage";

const PrivateRoute = ({ element }) => {
  const isLoggedIn = !!localStorage.getItem("token");
  return isLoggedIn ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path='/register' element={<RegistrationPage/>}/>
          <Route path="/dashboard" element={<PrivateRoute element={<DashboardPage/>} />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
