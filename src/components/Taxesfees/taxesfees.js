import React, { Component } from 'react';

class TaxesFees extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row show-grid">
                <div className="col-6">
                    Est. taxes & fees (Based on 94885)
                </div>
                <div className="col-6">
                    <h2>{this.props.taxes}</h2>
                </div>
            </div>
         );
    }
}
 
export default TaxesFees;