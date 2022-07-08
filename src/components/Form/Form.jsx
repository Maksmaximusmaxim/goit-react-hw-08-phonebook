import React, { Component } from 'react';
 export class Form extends Component {
    state={
        name: ''
    }
    onSubmit=e=>{
        e.preventDefault();
              this.reset();
        this.props.onSubmit(this.state)
      }
      
      
      reset =()=>{
        this.setState({
          name: ''
        })
      }
    alterationValue =e=>{
        
        this.setState({
          name:e.target.value
        })
      }
      render(){
         return (
        <form onSubmit={this.onSubmit}>
        <label htmlFor={this.props.id}>
          имя
        <input
         id={this.props.id}
          onChange={this.alterationValue}
          type="text"
          value={this.state.name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required />
        </label>
        <button type='submit'>Добавить контакт</button>
         </form>)
      }
   
}