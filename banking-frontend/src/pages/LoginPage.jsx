import React from 'react'
import LoginForm from '../components/LoginForm'
import { Link } from "react-router-dom";


function LoginPage() {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
      <p>
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </div>
  );
}

export default LoginPage
