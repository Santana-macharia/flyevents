import React, { Component } from 'react';
import EventItem from './EventItem';



class Events extends Component {
  render() {
    let eventItems;
    if(this.props.events){
      eventItems = this.props.events.map(event => {
        //console.log(event);
        
        return(
          
          <EventItem key={event.name} event={event} />
        
        );
      });
    }
    return (
      <div className="Events">
        {eventItems}
      
      </div>
    
    );
  }
}

export default Events;
