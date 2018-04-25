import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        return (
            <li>
                <div className={this.props.check ? 'checkbox active' : 'checkbox'} onClick={() => this.props.toggle()}></div>
                <div className={this.props.check ? "active" : ""}>{this.props.text}</div> 
                <button className="listbtn" onClick={() => this.props.delete()}>Delete</button>  
            </li>
        );
    }
}