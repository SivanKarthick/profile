import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return (
            <section className="header" id="hero_section">
                <div className="hero_wrapper">
                    <div className="container">
                        <div className="hero_section">
                            <div className="row">
                                <div className="col-md-12 text-right">
                                    <div className="zoomIn wow animated animated header-text">
                                        <h2>
                                            Hello, My Name is Karthick
                                            <br />
                                            <strong>I am a Front-end Developer</strong>
                                        </h2>
                                    </div>
                                    <div className="read-btn">
                                        <a href="#/" className="read_more2">Who Am I</a> 
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Header;