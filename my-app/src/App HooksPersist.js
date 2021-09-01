import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect } from 'react';
import usePersist from './Persist';

  // テーマ
  function AlertMessage(props) {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [age, setAge] = useState(0)
    const [mydata, setMydata] = usePersist()

    //　名前変更
    const onChangeName = (e) =>{
      setName(e.target.value)
    }
    //　メール変更
    const onChangeMail = (e) =>{
      setMail(e.target.value)
    }
    //　年齢変更
    const onChangeAge = (e) =>{
      setAge(e.target.value)
    }

    //　データ設定
    const onAction = () =>{
      const data = {
        name: name,
        mail: mail,
        age: age,
      }
      
      window.localStorage.setItem("hooks", JSON.stringify(data))
      setMydata(data)
    }
    // JSX返却
    return <div className="alert alert-primary h5 text-primary">
      <h5 className="mb-4">{JSON.stringify(mydata)}</h5>

      <div className="form-group">
        <label className="h6">Name</label>
        <input type="text" onChange={onChangeName}
          className="form-control" />
      </div>

      <div className="form-group">
        <label className="h6">Mail</label>
        <input type="text" onChange={onChangeMail}
          className="form-control" />
      </div>

      <div className="form-group">
        <label className="h6">Age</label>
        <input type="text" onChange={onChangeAge}
          className="form-control" />
      </div>

      <button onClick={onAction}
      className="btn btn-primary">Save it!</button>

    </div>
  
  }

  // ベース・コンポーネント
  function App() {
    return (<div>
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <h4 className="my-3">Hook Sample</h4>
        <AlertMessage />
      </div>
    </div>)
  }

export default App;