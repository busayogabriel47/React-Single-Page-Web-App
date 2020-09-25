import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from "./components/navBar";
import Home from "./components/home";
import Actors from "./components/actors";
import Actress from "./components/Actress";
import Films from "./components/Films";
import ActorContainers from './components/actorsContainer';
import ActressContainers from './components/actressContainer';



const App = () => {
  

  return(
      <div>
        <BrowserRouter>
        <div className="container">
          <Navbar />
          <Route exact path="/" render={()=> <Home title="Oscar Winners"/>}/>
          <Route path="/actors" component={()=> <ActorContainers />}/>
          <Route path="/Actress" component={()=> <ActressContainers/>}/>
          <Route path="/Films" component={()=> <Films/>}/>
        </div>
        </BrowserRouter>
      </div>
  )


}

export default App;
















/*

import Subtotal from './components/Subtotal/subtotal';
import Pickupsavings from './components/pickup/pickupsaving';
import TaxesFees from './components/Taxesfees/taxesfees';
import EstimatedTotal from './components/estimatedTotal/estimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetail';
import PromoCode from './components/Promocode/promoCode';
import { connect } from 'react-redux';
import { handleChange } from '././components/actions/promocodeaction'







class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        total : 100,
        pickupSavings: -3.85,
        taxes : 0,
        estimatedTotal : 0,
        disablePromoButton : false,
    }
  }

  componentDidMount = () =>{
    this.setState({
      taxes: (this.state.total + this.state.pickupSavings) * 0.0875
    }, 
    function(){
      this.setState({
        estimatedTotal: this.state.total + this.state.pickupSavings + this.state.taxes
      })
    })
  }
  render() { 
    return ( 
      <div className="container">
          <div className="row text-center">
              <div className="col-12 shoppingCard mt-5">
                  <Subtotal price={this.state.total.toFixed(2)}/>
                  <Pickupsavings price={this.state.pickupSavings}/> <hr/>
                  <TaxesFees taxes={this.state.taxes.toFixed(2)}/><hr/>
                  <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
                  <ItemDetails price={this.state.estimatedTotal.toFixed(2)}/><hr/>
                  <PromoCode giveDiscount={() => this.giveDiscount()}
                  isDisabled={this.state.disablePromoButton}
                  />
              </div>
          </div>
      </div>
     );
  }
}
 
const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})
export default connect(mapStateToProps, {handleChange})(App);

*/



