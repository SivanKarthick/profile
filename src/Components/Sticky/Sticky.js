import React from 'react';

class Sticky extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return (
            <section className="header_section">
                <div className="sticky_header">
                    <header id="header_wrapper">
                        <div className="container">
                            <div className="header_box">
                                <div className="logo">
                                    <img src="/header/logo1.png" alt="" />
                                </div>
                                <nav className="navbar navbar-inverse" role="navigation">
                                    <div className="navbar-header">
                                        <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav" onClick={ this.toogleMenu }> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
                                    </div>
                                    <div id="main-nav" className="navbar-collapse navStyle">
                                        <ul className="nav navbar-nav" id="mainNav">
                                            <li className="active"><a href="#/" className="scroll-link">Home</a></li>
                                            <li className=""><a href="#/" className="scroll-link">About Me</a></li>
                                            <li className=""><a href="#/" className="scroll-link">Skills</a></li>
                                            <li><a href="#/" className="scroll-link">Projects</a></li>
                                            <li><a href="#/" className="scroll-link">Experience</a></li>
                                            <li><a href="#/" className="scroll-link">Contact</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </header>

                </div>
            </section>
        )
    }
}

export default Sticky;