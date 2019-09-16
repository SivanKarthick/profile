import React from 'react';

class Service extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return (
            <section id="service">
                <div className="container">
                    <h2>Skills</h2>
                    <h6>I have Strong Knowledge In following technologies</h6>
                    <div className="service_wrapper">
                        <div className="row">
                        <div className="col-md-3">
                                <div className="service_icon delay-03s animated wow  zoomIn animated">
                                    <span><i className="fa fa-android"></i></span>
                                </div>
                                <div className="service_block">
                                    <h3 className="animated fadeInUp wow animated">HYBRID MOBILE  APPS</h3>
                                    <p className="animated fadeInDown wow animated"> Ionic, Angular js, Jquery mobile,Jquery,Cordova Firebase, Sql, Php</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="service_icon delay-03s animated wow  zoomIn animated">
                                    <span><i className="fa fa-android"></i></span>
                                </div>
                                <div className="service_block">
                                    <h3 className="animated fadeInUp wow animated">HYBRID MOBILE  APPS</h3>
                                    <p className="animated fadeInDown wow animated"> Ionic, Angular js, Jquery mobile,Jquery,Cordova Firebase, Sql, Php</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="service_icon delay-03s animated wow  zoomIn animated">
                                    <span><i className="fa fa-android"></i></span>
                                </div>
                                <div className="service_block">
                                    <h3 className="animated fadeInUp wow animated">HYBRID MOBILE  APPS</h3>
                                    <p className="animated fadeInDown wow animated"> Ionic, Angular js, Jquery mobile,Jquery,Cordova Firebase, Sql, Php</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="service_icon delay-03s animated wow  zoomIn animated">
                                    <span><i className="fa fa-android"></i></span>
                                </div>
                                <div className="service_block">
                                    <h3 className="animated fadeInUp wow animated">HYBRID MOBILE  APPS</h3>
                                    <p className="animated fadeInDown wow animated"> Ionic, Angular js, Jquery mobile,Jquery,Cordova Firebase, Sql, Php</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default Service;