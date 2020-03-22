import React, { Component } from 'react';



class EventItem extends Component {
  render() {
    return (
      <li className="Event">
      <strong>{this.props.event.name}</strong> <br></br> {this.props.event.date}
      </li>
    
    );
  }
}

export default EventItem;
