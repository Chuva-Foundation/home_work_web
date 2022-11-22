import logo from './logo.svg';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactDOM } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css';
import { faRegistered, faSignIn } from '@fortawesome/free-solid-svg-icons';

import Modal1 from './Components/Modal1';
import Modal2 from './Components/Modal2';

function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  return (
    <div className="App">
      <div className="main">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" /><h3>Academy</h3>
          <div className="center">
            <div className="menu a">
              <button onClick={ () => setIsModalVisible(true) } className="btn btn-lg btn-info mr-20">Register</button>
              {isModalVisible ? <Modal1 onClose={ () => setIsModalVisible(false)}></Modal1> : null}
            </div>
            <div className="menu b">
              <button onClick={ () => setIsModalVisible2(true) } className="btn btn-lg btn-light">Log In</button>
              {isModalVisible2 ? <Modal2 onClose={ () => setIsModalVisible2(false)}></Modal2> : null}
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
