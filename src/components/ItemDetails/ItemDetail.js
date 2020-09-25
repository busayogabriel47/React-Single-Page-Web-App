import React, { Component, useState } from 'react';
import { Button, Collapse, CardBody, Card, Media } from 'reactstrap'




const ItemDetails = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <div className="row">
        <div className="col-6 itemdetail">
    <Button className="btn btn-lg" color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
        {isOpen === false ? `See `: `Hide `} Item detail
        {isOpen === false ? `+ ` : `- `}
        </Button>
            <Collapse isOpen={isOpen}>
            <Card>
                <CardBody>
                    <Media>
                        <Media left>
                            <img src="https://i5.walmartimages.com/asr/190a6270-cc48-43d9-b0ee-16371e69d573_1.e54ecdeea0607b631596e1afaf667a60.jpeg?odnHeight=376&odnWidth=282&odnBg=ffffff"
                            alt="Tshirt"
                            title="Men's Shirt"
                            width="100%"/>
                        </Media>    
                        <Media Body>
                            <div className="row">
                                <div className="col-12">
                                    <p>Essentials by OFM ESS-3885 T-Shirt Red quallity cotton </p>
                                </div>
                                <div className="col-6">
                                    <strong>{`$${props.price}`}</strong><br/>
                                </div>
                                <div className="col-6">
                                    <strong className="priceTag">QTY: 1</strong>
                                </div>
                            </div>
                        </Media>
                    </Media>
                </CardBody>
            </Card>
            </Collapse>
      </div>
        </div>
      </div>
    );
  }
  
  export default ItemDetails;