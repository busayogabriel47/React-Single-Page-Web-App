import React from 'react';

const Home = (props) => {
    return ( 
        <div>
            <div className="container home_page">
                <div className="row">
                    <div className="col-12">
                        <h2 className="mt-5 mb-5">{props.title}</h2>
                    </div>
                </div>
                <div className="container home-banner">
                    <div className="row">
                        <div className="col-12 home_image mb-4"></div>
                    </div>
                    <div className="row mt-3 pb-5">
                        <div className="col-12 col-md-4 home_image_col">

                        </div>
                        <div className="col-12 col-md-4 home_image_col1">

                        </div>
                        <div className="col-12 col-md-4 home_image_col2">

                        </div>
                    </div>
                </div>
                </div>
            </div>
     );
}
 
export default Home;