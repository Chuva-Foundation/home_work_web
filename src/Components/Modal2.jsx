import React, {useState} from "react";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
            <form onSubmit= {handleSubmit}>
                <label for = "email">email</label>
                <input value={email} onChange={ (e) => setEmail(e.target.value)} type="email" placeholder="your email"></input>

                <label for = "password">password</label>
                <input value={pass} onChange = {(e) => setPass(e.target.value)} type = "password" placeholder="******"></input>
                
                <button type="submit">Log In</button>
            </form>
            <button>Don't have am account? Register here.</button>
        </>
    )

}

const Modal2 = ( {id ='Modal', onClose = () => {}}) => {
    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    };
    return (
        <div id={id} className="Modal1" onClick={handleOutsideClick}>
            <div className="container1">
                <button className="close1" onClick={onClose}></button>
                <div className="content1">
                    <Login />
                </div>
            </div>
        </div>
    )
};

export default Modal2