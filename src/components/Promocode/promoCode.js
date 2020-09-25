import React, { Component, useState } from 'react';
import { Collapse, 
  Form, FormGroup, 
  Button, ControlLabel,
   FormControl, Card,
    CardBody, Label, Input, FormText} 
    from 'reactstrap';
    import { connect } from 'react-redux';
    import { handleChange } from '../actions/promocodeaction'


const PromoCode = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

    handleChange = e => {
      props.handleChange(e)
    }
  
    return (
      <div className="row">
        <div className="col-6 promoCode">
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
          {isOpen === false ? `Apply ` : `Hide `} Promo Code    {isOpen === false ? `+ ` : `- `}
        </Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
                  <div className="row">
                      <div className="12 text-center">
                      <Form>
                        <FormGroup>
                          <Label for="exampleEmail">Promo Code</Label>
                          <Input type="text" name="email" 
                          id="exampleEmail" 
                          placeholder="Enter Promo Code" 
                          value={props.PromoCode}
                          onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                         <Label for="exampleSelect">Select</Label>
                          <Input type="select" name="select" id="exampleSelect">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </Input>
                        </FormGroup>
                        <Button className="btn btn-lg btn-primary"
                        disabled={props.isDisabled}
                        onClick={props.giveDiscount}
                        >Apply Promo code</Button>
                    </Form>
                      </div>
                  </div>
            </CardBody>
          </Card>
        </Collapse>
      </div>
      </div>
    );
  }
  
  const mapStateToProps = state => ({
    promoCode: state.promoCode.value
  })
  export default connect(mapStateToProps, {handleChange})(PromoCode);