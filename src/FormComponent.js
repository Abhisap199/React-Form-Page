import React from 'react'

function FormComponent(props)
{
    return(
        <menu>
          <form>
          Enter your FirstName
          <input 
          type="text"
          name="FirstName"
          value={props.data.FirstName}
          placeholder ="First Name"
          onChange = {props.handlechange}/>
          <br/><br/>
          Enter your LastName
          <input
          type="text"
          name="LastName"
          value={props.data.LastName}
          placeholder ="Last Name"
          onChange = {props.handlechange}/>
          <br/><br/>
          Enter your age
          <input
          type="text"
          name="age"
          value={props.data.age}
          placeholder ="age"
          onChange = {props.handlechange}/>
          <br/><br/>
          Enter your Gender
          <label><input
          type="radio"
          name="radio"
          value="male"
          checked = {props.data.radio == "male"}
          onChange = {props.handlechange}/>
          male</label>

          <label><input
          type="radio"
          name="radio"
          value="female"
          checked = {props.data.radio == "female"}
          onChange = {props.handlechange}/>
          female</label>
          <br/>
          <br/>
          <select
            value={props.data.destination}
            name="destination"
            onChange ={props.handlechange}
            >
            <option value="">--Select your destination--</option>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
            <option value="e">e</option>
          </select>
          <br/>
          <br/>
          <label>
            <input
            type= "checkbox"
            name ="isWarm"
            onChange={props.handlechange}
            checked={props.data.isWarm}
            />isWarm..?
          </label>

          <br/>
          <label>
            <input
            type= "checkbox"
            name ="isCold"
            onChange={props.handlechange}
            checked={props.data.isCold}
            />isCold..?
          </label>

          <br/>
          <label>
            <input
            type= "checkbox"
            name ="isRainy"
            onChange={props.handlechange}
            checked={props.data.isRainy}
            />isRainy..?
          </label>

          <br/><br/>
          <button>submit</button>

          <br/><br/>
          <h1>Entered information:</h1>
          <p>Name : {props.data.FirstName} {props.data.LastName}</p>
          <p>age       : {props.data.age}</p>
          <p>Gender    : {props.data.radio}</p>
          <p>You would like to got to - {props.data.destination}</p>
          <p>Are you feeling the weather is isWarm - {props.data.isWarm ? "yes" : "no"}</p>
          <p>Are you feeling the weather is isCold- {props.data.isCold ? "yes" : "no"}</p>
          <p>Are you feeling the weather is isRainy- {props.data.isRainy ? "yes" : "no"}</p>
          </form>
        </menu>
      )
}

export default FormComponent