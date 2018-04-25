import React, { Component } from 'react';
import Item from './Item';

export default class Additem extends Component {
  constructor(props) {
      super(props);
      this.state = {
          items: [
              {text: "test", checked: true },
              {text: "hej", checked: false }
            ]
      }
      
  }

   onSubmit(e){
      e.preventDefault();
      const newItem = [{text: this.refs.input.value, checked: false}];
      const newState = this.state.items.concat(newItem);
      this.setState({
          items: newState
      });
      this.refs.input.value ="";
   }

    onToggle(index) {
        const newState = this.state.items.map((item, i) => i === index ? {...item, checked: !item.checked} : item);
        this.setState({
            items: newState
        });
    }

    onDelete(index) {
        const newState = this.state.items.filter((item,i) => {
            if(i !== index) {
                return item;
            }
        });
        this.setState({
            items: newState
        });
    }

    onDeleteAll(){
        const removeChecked = this.state.items.filter((item,i) => {
            if (!item.checked){
                return item;
            }
        });
        this.setState({
            items: removeChecked
        });
    } 
   
    render() {

        const itemList = this.state.items.map((item,index) => (
            <Item key={index} check={item.checked} text={item.text} 
            toggle={() => this.onToggle(index)} delete={() => this.onDelete(index)}/>
       ));

        return (
            <div>
                <ul>{itemList}</ul>
                <form className="form-input" onSubmit={ (e) => this.onSubmit(e)}>
                    <input className="item-input" type="text" ref="input" required />
                    <button className="submit-btn" type="submit">Submit</button>
                </form>
                <div className="delete-container">
                <button className="delete-btn" onClick={() => this.onDeleteAll()}>Delete checked</button>
                </div>
                
            </div>
            
        );
    }
}