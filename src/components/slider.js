import React, { Component } from 'react';

import SimpleSlider from './sliding'

class SliderxComponent extends Component{

  render(){

   
    return(
      <div>
        <div className="container mt-5">
          <div className="col-md-5 mx-auto">
             {SimpleSlider(this.props.profile)}
          </div>
        </div>
        </div>
    );
  }

}



export default SliderxComponent;
