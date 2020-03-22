import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios';
import Button from 'react-bootstrap/lib/Button';

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val)
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    axios.get('assets/samplejson/customer' + id + '.json').then(response => {
      this.setState({customerDetails: response})
    })
  };

  render() {
    if (!this.state.customerDetails)
      return (<p>Loading Data</p>)
    return (<div className="customerdetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.customerDetails.data.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Name : {this.state.customerDetails.data.name}</p>
          <p>Description : {this.state.customerDetails.data.description}</p>
          <p>Event Owner : {this.state.customerDetails.data.owner}</p>
          <p>Location : {this.state.customerDetails.data.location}</p>
          <p>Start : {this.state.customerDetails.data.start}</p>
          <p>End : {this.state.customerDetails.data.end}</p>
          <p>Confirmed attendees : {this.state.customerDetails.data.attendees}</p>
          <Button type="button">Edit/Update</Button>
              <Button type="button">Share</Button>
              <Button type="button">Invite</Button>
              <Button type="button">Comments</Button>
              
          
        </Panel.Body>
      </Panel>
    </div>);
    
  
  }
}
