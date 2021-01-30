import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import '../App.css';
import '../index.css';


import Profile from '../containers/profiles';
import SliderxComponent from '../containers/slider';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      currentTab: 'profiles'
    }
  }

  render(){

    return(
      <div className="App">
        <Navbar bg="info" variant="dark">
            <Navbar.Brand href="#home">Github Profiles</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="" onClick={ ()=> this.setState({currentTab: 'profiles'}) } >Profile</Nav.Link>
              <Nav.Link href="" onClick={ ()=> this.setState({currentTab: 'slider'}) }>Slide</Nav.Link>
            </Nav>           
        </Navbar>

        <div>
          { this.state.currentTab === 'profiles' ? <Profile />  : <SliderxComponent /> }

        </div>

    </div>
    );
  }

}



export default App;
