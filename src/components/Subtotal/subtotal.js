import React, { Component } from 'react';

class Subtotal extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row">
                <div className="col-6 p-2">Subtotal</div>
                <div className="col-6 p-2"><h2>{`$${this.props.price}`}</h2></div>
            </div>
         );
    }
}
 
export default Subtotal;