import React from 'react';
import Header from './Components/Header/Header';
import Sticky from './Components/Sticky/Sticky';
import Aboutus from './Components/Aboutus/Aboutus';
import Service from './Components/Service/Service'
import './Components/AllComponents.scss';
import './Components/animate.css';



class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleRightMenu: {diplay: 'none'}
        }
        console.log(this.props)
    }

    toogleMenu() {
        let e = document.getElementById('main-nav');
        if (window.getComputedStyle(e).display === "none") {
            e.style.display = 'block';
        } else {
            e.style.display = 'none';
        }
    }

    render() {
        return (
            <div className="main">
                <Header />
                <Sticky />
                <Aboutus />
                <Service />
            <section id="Portfolio" className="content">
            <div className="container portfolio_title"> 
                <div className="section-title">
                    <h2>Projects</h2>
                    <h6>This are my works</h6>
                </div>
            </div>

            <div id="filters" className="sixteen columns">
                <ul className="clearfix">
                    <li>
                        <a id="all" href="#/" data-filter="*" className="active"><h5>All</h5></a>
                    </li>
                    <li>
                        <a href="#/" data-filter=".prototype" ><h5>Mobile Apps</h5></a>
                    </li>
                    <li>
                        <a href="#/" data-filter=".design" ><h5>Photoshop Design</h5></a>
                    </li>
                    <li>
                        <a href="#/" data-filter=".appleIOS" ><h5>Websites</h5></a>
                    </li>
                </ul>
            </div>
            <div className="isotope fadeInLeft animated wow grid animated" id="portfolio_wrapper">
                <figure className="portfolio-item one-four appleIOS isotope-item effect-oscar">
                    <div className="portfolio_img"> 
                        <img src="header/design.png"  alt="Portfolio 1" />
                    </div> 
                    <figcaption>
                        <div>
                            <a href="#/" className="fancybox"> 
                                <h2>Warm <span>Oscar</span></h2>
                                <p>Oscar is a decent man. He used to clean porches with pleasure.</p>
                            </a>
                        </div>
                    </figcaption>
                </figure>
            </div>



            </section>

            </div>
        );
    }
}

export default Profile;