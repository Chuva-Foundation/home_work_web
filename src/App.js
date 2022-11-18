import logo from './logo.svg';
import React from 'react';
import { usestate } from 'react-modal'
import { Modal } from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactDOM } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';
import { faRegistered, faSignIn } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement ('#root')

function App() {

  const[modalIsOpen, setIsOpen] = usestate(false)

  function handleOpenModal1() {
    setIsOpen(true)
  }

  function handleCloseModal1() {
    setIsOpen(false)
  }

  const customStyles1 = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    }
  }


  return (

    <div className="App">
      <div className="main">
      <div className="logo">
      <img src={logo} className="App-logo" alt="logo" /><h3>Academy</h3>
        <div className="center">
          <div className="menu a">
            <button onClick={handleOpenModal1} className="btn btn-lg btn-info mr-20">Register</button>
            <Modal isopen={modalIsOpen} oneRequestClose={handleCloseModal1}>style={customStyles1}
              <h2>Hello</h2>
              <button onClick={handleCloseModal1}>close</button>
                <div>I am a modal</div>
                
            </Modal>
          </div>
          <div className="menu b">
              <button onClick={faSignIn} className="btn btn-lg btn-light">Log In</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
