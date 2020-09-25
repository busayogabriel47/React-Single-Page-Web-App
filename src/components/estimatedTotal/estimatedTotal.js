import React, { Component } from 'react';

class EstimatedTotal extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row">
                <div className="col-6 p-5"><h2>Est. Total</h2></div>
                <div className="col-6 p-5"><h2>{`$${this.props.price}`}</h2></div>
            </div>
         );
    }
}
 
export default EstimatedTotal;