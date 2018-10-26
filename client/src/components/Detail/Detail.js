import React, { Component } from "react";
import { Link } from "react-router-dom";
// import DeleteBtn from "../DeleteBtn";
import { Col, Row, Container } from "../Grid";
// import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
import "./Detail.css";



const Nav = (props) => (
  <nav className="navbar navbar-dark bg-dark">
    <span className="navbar-brand" href="#">Event Assistant</span>
    <span className="text-white"></span>
    <Link to="/home">Main</Link>
    <Link to="/canvas">Floor Plan</Link>
    <Link to="/auth/logout">Log out</Link>
    <button onClick = {props.handleLogout}>Log Out</button> 
  </nav>
);

// const Detail = () => (
//   <div>
//     <Nav />
//     <h1>Details</h1>
//     <p>Form for event data:  Most likely data fields
//     </p>
//     <div>
//     <Link to="/main">Main</Link>
//     </div>
//     <div>
//     <Link to="/login">Logout</Link>
//     </div>
//   </div>
// );

class Detail extends Component {
   
  state = {
    detailsArray: [],
    venue: "",
    streetOne: "",
    streetTwo: "",
    city: "",
    state: "",
    zip: "",
    guestCount: "",
    schedule: "",
    catering: "",
    entertainment: "",
    Notes: ""
  };

  handleInputChange = event => {
    console.log(event);
    let {name, value} = event.target;

    this.setState ({
      [name]: value
    });

  };


  render() {
    return(
      
      <div>
        <Nav />
      <Container fluid>
      
        <Row>
        <Col size="md-6">
            <h1>Event Details</h1>
            <form>
              <Input
                value={this.state.venue}
                onChange={this.handleInputChange}
                name="venue"
                placeholder="Venue"
              />
              <div className="address">
              <Input
                value={this.state.streetOne}
                onChange={this.handleInputChange}
                name="streetOne"
                placeholder="Street"
              />
              <Input
                value={this.state.streetTwo}
                onChange={this.handleInputChange}
                name="streetTwo"
                placeholder="Street"
              />  
              <Input
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="City"
              />
              <Input
                value={this.state.state}
                onChange={this.handleInputChange}
                name="state"
                placeholder="State"
              />
              <Input
                value={this.state.zip}
                onChange={this.handleInputChange}
                name="zip"
                placeholder="Zip"
              />
              </div>
              <Input
                value={this.state.guestCount}
                onChange={this.handleInputChange}
                name="guestCount"
                placeholder="Guest Count"
              />
              <Input
                value={this.state.schedule}
                onChange={this.handleInputChange}
                name="schedule"
                placeholder="Schedule"
              />
              <Input
                value={this.state.catering}
                onChange={this.handleInputChange}
                name="catering"
                placeholder="Catering"
              />
              <Input
                value={this.state.entertainment}
                onChange={this.handleInputChange}
                name="entertainment"
                placeholder="Entertainment"
              />
              <TextArea
                value={this.state.notes}
                onChange={this.handleInputChange}
                name="notes"
                placeholder="Notes"
              />
              <FormBtn
                disable={!(this.state.eventName && this.state.eventDate)}
                onClick={this.handleFormSubmit}
              >
                Save Event Info
              </FormBtn>
            </form>
          </Col>
          </Row>
          </Container>
          </div>
          
          );
          }
          }

export default Detail;
