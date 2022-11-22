import React, { useState } from "react";

export const Register = () => {
    const[email, setEmail] = useState('');
    const[pass, setPass] = useState('');
    const[name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" id="name" placeholder="full name"></input>
                
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="email"></input>

                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} id="password" placeholder="password"></input>
                <button type="submit">Register</button>
            </form>
            <button>Already have an account? Login here.</button>
        </>
    )
}

const Modal1 = ( {id ='Modal', onClose = () => {}}) => {
    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    };
    return (
        <div id={id} className="Modal1" onClick={handleOutsideClick}>
            <div className="container1">
                <button className="close1" onClick={onClose}></button>
                <div className="content1">
                    <Register />
                </div>
            </div>
        </div>
    )
};

export default Modal1