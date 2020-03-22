import React, { Component } from 'react';

import './App.css';
import Customers from './Customers';
import Events from './Components/Events';
import AddEvent from './Components/AddEvent';
import { BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';


class App extends Component {
  constructor(){
    super();
    this.state={
      events :[]
    
    }
  }

  componentWillMount(){
    this.setState({events:[
      {
        name: 'Career Fair',
        date: '30/3/20'
      },
      {
        name: 'Hackathon',
        date: '11/4/20'
      },
      {
        name: 'Tech event',
        date: '6/5/20'
      }

    ]});
  }

  handleAddEvent(event){
    let events = this.state.events;
    events.push(event);
    this.setState({events:events});
  }

  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
       
        <header className="App-header">
          <img src={process.env.PUBLIC_URL + '/flyevents.jpg'} className="App-logo" alt="logo" />
          <h6 className="App-title">FLY EVENTS INC</h6>
        </header>
        
        
        
        <h1>Events</h1>
        <Events events={this.state.events}/>
        <AddEvent addEvent={this.handleAddEvent.bind(this)}/>

        <br/>
        <br/>
        <button type = "button">
            <Link to="/events">View events</Link>
          </button>
         
        
       
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/home"/>
                )}/>
                 <Route exact path='/home' component={Events} />
                 <Route path="/events">
            <Customers />
          </Route>
          </Switch>

        
      </div>
      
    </Router>
    );
  }
}

export default App;
