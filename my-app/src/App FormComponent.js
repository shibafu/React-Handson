import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';

  // テーマ
  function AlertMessage(props) {
    const data = props.data
    const msg = JSON.stringify(data)

    return(<div className="alert alert-primary h5 text-primary">
      <hr />
      <table className="table h6">
        <tbody>
          <tr><th>Name</th><td>{data.name}</td></tr>
          <tr><th>Mail</th><td>{data.mail}</td></tr>
          <tr><th>Age</th><td>{data.age}</td></tr>
        </tbody>
      </table>
    </div>)


  }
  // テーマ
  function App() {
    // state
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [age, setAge] = useState(0)
    const [form, setForm] = useState({
      name:'no name',mail:'no mail', age:0
    })

    // フックメソッド
    const doChangeName = (event) => {
      setName(event.target.value)
    }

    const doChangeMail = (event) => {
      setMail(event.target.value)
    }

    const doChangeAge = (event) => {
      setAge(event.target.value)
    }

    const doSubmit = (event) => {
      setForm({name:name, mail:mail, age:age})
      event.preventDefault()
    }
    
    return (<div>
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <h4>Hook Sample</h4>
        <AlertMessage data={form} setData={setForm} />
        <form onSubmit={doSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" className="form-control"
              onChange={doChangeName} />

          </div>
          <div className="form-group">
            <label>Mail:</label>
            <input type="text" className="form-control"
              onChange={doChangeMail} />

          </div>
          <div className="form-group">
            <label>Age:</label>
            <input type="text" className="form-control"
              onChange={doChangeAge} />

          </div>

          <input type="submit" className="btn btn-primary"
            value="Click" />
        </form>
      </div>
    </div>)

  }

export default App;