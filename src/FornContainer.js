import React, { Component } from 'react'
import FormComponent from './FormComponent';

class FormContainer extends Component
{
  constructor()
  {
    super()
    this.state = {
      FirstName : '',
      LastName : '',
      age : null,
      radio : '',
      destination : '',
      isWarm : false,
      isCold : false,
      isRainy :false

    }
    this.handlechange=this.handlechange.bind(this);
  }
    
    handlechange(event)
    {
      const {name,value,type,checked} = event.target
      type === "checkbox" ? this.setState({ [name] : checked }) : this.setState({ [name] : value })
      
    }
    
    render()
    {
      return(
          <div>
              <FormComponent handlechange={this.handlechange} data = {this.state}/>
          </div>
      )   
  }
}

export default FormContainer