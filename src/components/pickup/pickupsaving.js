import React, { Component } from 'react';

var styles = {
totalSaving: {
    color: 'red',
    fontWeight: 800,
}
}

class Pickupsavings extends Component {
    state = {  }
    render() { 
        
        return ( 
            <div className="row">
                <div className="col-6">
                <button type="button" className="btn btn-secondary p-2" 
                data-toggle="tooltip" data-placement="bottom" 
                title="Picking up your order">
                    Pickup Savings
                </button>
                </div>
                <div className="col-6 p-2"><h2 style={styles.totalSaving}>{`$${this.props.price}`}</h2></div>
            </div>
         );
    }
}
 
export default Pickupsavings;