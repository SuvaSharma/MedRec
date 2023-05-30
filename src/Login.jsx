import React, { useState } from "react";
import { Register } from "./Register";
import { DoctorRegister } from "./DoctorRegister";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  const renderRegisterPage = () => {
    if (selectedOption === "Patient") {
      return <Register onFormSwitch={props.onFormSwitch} />;
    } 

    // Handle other options here if needed
    
  };
  {
     if (selectedOption === "Medical Staff") {
      return <DoctorRegister onFormSwitch={props.onFormSwitch} />;
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      {!selectedOption ? (
        <div className="dropdown-container">
          <button className="link-btn" onClick={handleDropdownClick}>
            Don't have an account? Register here.
          </button>
          {showDropdown && (
            <div className="dropdown">
              <button onClick={() => handleOptionClick("Medical Staff")}>
                Medical Staff
              </button>
              <button onClick={() => props.onFormSwitch("Patient")}>
                Patient
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          {renderRegisterPage()}
        </>
      )}
    </div>
  );
};

export default Login;
