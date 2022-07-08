import React, { Component } from 'react';
 export class Form extends Component {
    state={
        name: '',
        number: ''
    }
    onSubmit=e=>{
        e.preventDefault();
              this.reset();
        this.props.onSubmit(this.state)
      }
      
      
      reset =()=>{
        this.setState({
          name: '',
          number: ''
        })
      }
    alterationValue =e=>{
        
        const { name, value } = e.target;
        this.setState({
          [name]:value
        })
      }
      render(){
         return (
        <form onSubmit={this.onSubmit}>
        <label >
          имя
        <input
         
          onChange={this.alterationValue}
          type="text"
          value={this.state.name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required />
        </label>
        <label > номер
          <input
          onChange={this.alterationValue}
        value={this.state.number}
         type="tel"
         name="number"
         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
        </label>
         
        <button type='submit'>Добавить контакт</button>
         </form>)
      }
   
}