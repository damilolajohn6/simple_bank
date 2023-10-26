import React from 'react'
import RegistrationForm from '../components/RegistrationForm'
import { Link } from "react-router-dom";


function RegistrationPage() {
  return (
    <div>
      <h2>Register</h2>
      <RegistrationForm />
      Already have an account? <Link to="/">Login here</Link>.
    </div>
  );
}

export default RegistrationPage
