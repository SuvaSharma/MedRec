import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [gender, setGen] = useState('');
    const [address, setAdd] = useState('');
    const [contact, setCon] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
           
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="Gender">gender</label>
            <input value={gender} onChange={(e) => setGen(e.target.value)}type="gender"  id="gender" name="gender" />
            <label htmlFor="Address">email</label>
            <input value={address} onChange={(e) => setAdd(e.target.value)}type="address" placeholder="Permanent Address" id="address" name="address" />
            <label htmlFor="Contact">contact</label>
            <input value={contact} onChange={(e) => setCon(e.target.value)}type="contact" placeholder="Phone Number" id="phone number" name="phone number" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Already have an account? Login here.</button>
    </div>
    )
};

export default Register;
