import React, { useState } from "react";

export const DoctorRegister = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [qualification, setQualification] = useState('');
  const [nmcNumber, setNmcNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, pass, qualification, nmcNumber);
    // Perform registration logic here
  }

  return (
    <div className="auth-form-container">
      <h2>Doctor Registration</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <label htmlFor="qualification">Qualification</label>
        <input value={qualification} onChange={(e) => setQualification(e.target.value)} id="qualification" placeholder="Qualification" />
        <label htmlFor="nmcNumber">NMC Number</label>
        <input value={nmcNumber} onChange={(e) => setNmcNumber(e.target.value)} id="nmcNumber" placeholder="NMC Number" />
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  );
};