import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

import './App.css';

function App() 
{ 
 const [toDo, setToDo] = useState([{"id": 1, "title": "Task 1", "status": false}, {"id": 2,"title": "Task 2", "status": false}]);

  const[NewTask, setNewTask] = useState('');
  const[updateData, setUpdateData] = useState('');

  const AddTask = () => {
    if(NewTask) {let num = toDo.length + 1; let newEntry = { id: num, title: NewTask, status: false }; setToDo([...toDo, newEntry]); setNewTask('');}
  }

  const deleteTask = (id) => {
    let NewTasks = toDo.filter(task => task.id !== id); setToDo(NewTasks);
  }

  const markDone = (id) => {
    let NewTask = toDo.map(task => {
      if(task.id === id) {return ({...task, status: !task.status})} return task;}); setToDo(NewTask)}

  const cancelUpdate = () => {
    setUpdateData(" ");
  }

  const changeTask = (e) => {
    let newEntry = { id:updateData.id, title: e.target.value, status: updateData.status ? true : false}
    setUpdateData(newEntry);
  }

  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id)
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData("");
  }

  return (
    <div className="container App">

      <br /><br />
      <h2>TO DO LIST APP (ReactJS)</h2>
      <br /><br />

      <div className="row">
        <div className="col">
          <input value={ updateData && updateData.title } onChange={ (e) => changeTask(e) } className="form-control form-control-lg"/>
        </div>
        <div className="col-auto">
          <button onClick={updateTask} className="btn btn-lg btn-success mr-20">updateData</button>
          <button className="btn btn-lg btn-warning">cancelUpdate</button>
        </div>
      </div>
      <br />


      <div className="row">
        <div className="col">
          <input value={NewTask} onChange={ (e) => setNewTask(e.target.value)} className="form-control form-control-lg"></input>
        </div>
        <div className="col-auto">
          <button onClick={AddTask} className="btn btn-lg btn-success">addTask</button>
        </div>
      </div>
      <br />

      {toDo && toDo.length ? '' : 'No Tasks...'}
      
      {toDo && toDo
        .map((task, index) => {
          return(
            <React.Fragment Key = {task.id}>

              <div className = "col taskBg">

                <div className = {task.status ? 'done' : ''}>
                  <span className = "taskNumber">{index + 1}</span>
                  <span className = "taskText">{task.title}</span>
                </div>
                <div className='iconsWrap'>
                  <span onClick={ (e) => markDone(task.id) }><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon></span>
                  {task.status ? null :(
                    <span title="Edit" onClick={ () => setUpdateData({id: task.id, title:task.title, status: task.status ? true : false})}><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></span>)}
                  <span title="Delete" onClick={() => deleteTask(task.id)}><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></span>
                </div>
              </div>
            </React.Fragment>
          )
        })
      }
    </div>
  );
}

export default App;
