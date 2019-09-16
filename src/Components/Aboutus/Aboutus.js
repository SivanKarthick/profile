import React from 'react';

class Aboutus extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return (
            <section id="aboutUs">
                <div className="inner_wrapper aboutUs-container fadeInLeft animated wow animated">
                    <div className="container">
                        <h2>Who Am I</h2>
                        <h6>Hi, Am From Chennai, Am a Front-end Developer</h6>
                        <div className="inner_section">
                            <div className="row">
                                <div className="col-lg-12 about_us">
                                    <div className="row">
                                        <div className="col-md-6 text-center imgClass">
                                            <img className="img-responsive" alt="" src="/header/sachin-tent.jpg" />
                                        </div>
                                        <div className="col-md-6">
                                            <h3>I Design/Develop  Software/Hybrid Mobile Apps/Websites</h3>
                                            <p>I’m a 23-year-old passionate computer programmer, Entrepreneur, loves travel, food, culture and you. I have a good knowledge of various technologies such as the web, mobile development. I’ve completed more than 10+ Projects</p>
                                            <ul className="aboutUsList">
                                                <li className="points">
                                                    <b>Mission</b> - I deliver uniqueness and quality
                                                </li>
                                                <li className="points">
                                                    <b>Skills</b> - Delivering fast and excellent designs
                                                </li>
                                                <li className="points">
                                                    <b>Clients</b> - Satisfied clients thanks to my experience
                                                </li>
                                                <li className="points">
                                                    Writing well designed, testable, efficient code
                                                </li>
                                                <li className="points">
                                                    Integrate software components into a fully functional software system
                                                </li>
                                                <li className="points">
                                                    Dive into difficult problems and successfully deliver results within a schedule
                                                </li>
                                                <li className="points">
                                                    Participate in discussions with clients and team members about technical best practices and help teams identify optimal technical solutions.
                                                </li>
                                            </ul>
                                        </div>
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

export default Aboutus;