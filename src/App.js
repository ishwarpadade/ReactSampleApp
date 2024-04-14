import './App.css';
import { useState } from 'react';

function App() {
const [formData,setformData]= useState({
  name:'',
  email:'',
  occupation:'',
  gender:'',
  languages:[],
})

const onChangeHandler=(event)=>{
  //console.log(event);
  if(event.target.name==='languages')
  {
    let copy={...formData}
    if(event.target.checked)
    {
      copy.languages.push(event.target.value);
    }
    else{
      copy.languages= copy.languages.filter(ele=>ele !== event.target.value)
    }
    setformData(copy);
  }
  else
  {
  setformData(()=>({
    ...formData,
    [event.target.name]:event.target.value
  }));
}
}

onchange=(event)=>{
  event.preventDefault();
  console.log(formData);
}

const onSubmitHandler=(event)=>{
  event.preventDefault();
  console.log(formData);
}


  return (
    <>
    <h2>Form</h2>
<div className="app">
<form onSubmit={onSubmitHandler}>
  <div className="form-group">
    <label htmlFor="username" className="form-label">User Name</label>
      <input className='form-control' type="text" name="name" onChange={onChangeHandler}/>
    </div>

    <div className="form-group">
    <label htmlFor="username" className="form-label">Email</label>
    <input className='form-control' type="text" name="email" onChange={onChangeHandler}/>
    </div>

    <div className="form-group">
    <label htmlFor="username" className="form-label">Occupation</label>
      <select name="occupation" className="form-select" onChange={onChangeHandler}>
        <option value="student">Student</option>
        <option value="employee">Employee</option>
        <option value="other">Other</option>
      </select>
    </div>

  <div className="form-group">
    <label htmlFor="username" className="form-label">Gender</label>
    <div>
      <input type="radio" name="gender" value="male" onChange={onChangeHandler}/>
      <label htmlFor="male">Male</label>
    </div>

    <div>
      <input type="radio" name="gender" value="female" onChange={onChangeHandler}/>
      <label htmlFor="female">Female</label>
    </div>

    <div>
      <input type="radio" name="gender" value="other" onChange={onChangeHandler}/>
      <label htmlFor="other">Other</label>
    </div>

  </div>

    <div className="form-group">
      <label htmlFor="" className="form-label">Languages</label>
      <input type='checkbox' name='languages' value='html' onChange={onChangeHandler}/>
      <label htmlFor="">HTML</label>
      <input type='checkbox' name='languages' value='java' onChange={onChangeHandler}/>
      <label htmlFor="">JAVA</label>
      <input type='checkbox' name='languages' value='python' onChange={onChangeHandler}/>
      <label htmlFor="">PYTHON</label>
    </div>
    <div className="form-group">
      <button className='btn btn-primary' value="Submit" > Submit </button>
    </div>
  </form>
  </div>
  </>
  );
}

export default App;
