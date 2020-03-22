import React, { Component } from 'react';



class AddEvent extends Component {
    constructor(){
        super();
        this.state={
            newEvent:{}
        }
    }
    handleSubmit(e){
        if(this.refs.name.value === ''){
            alert('Name is required');
        } else{
            this.setState({newEvent:{
                name: this.refs.name.value,
                date: this.refs.date.value
            }}, function(){
                //console.log(this.state);
                this.props.addEvent(this.state.newEvent);
            });

        }
        e.preventDefault();
    }
  render() {
    
    return (
      <div id = "addevent">
        <h3>Create an event</h3>
        <form onSubmit ={this.handleSubmit.bind(this)}>
            <div>
                <label>Name</label><br/>
                <input type="text" ref="name"/>
            </div>
            <div>
                <label>Date</label><br/>
                <input type="date" ref="date"/>
            </div><br/>
            <input type ="submit" value="Submit"/>
            
            </form>
        
      
      </div>
    
    );
  }
}

export default AddEvent;
