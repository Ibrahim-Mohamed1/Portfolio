import React from 'react';
import { Link } from "react-router-dom"
import logo from "./logo.png"

const Projects = () => {
    const styles = {
        parent: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10
        },
        logo: {
            width: 40,
            marginRight: "auto"
        },
        navMargin: {
            marginLeft: "5%",
            textDecoration: "none"
        }
    }
    return (
        <>
            <div style={styles.parent}>
                <a style={{ marginRight: "auto" }} href="/"><img className="nav" style={styles.logo} src={logo} alt="" /></a>
                <h3 style={{ ...styles.navMargin }}><Link className="link" style={{ textDecoration: "none" }} to="/">Home</Link></h3>
                <h3 className="nav" style={styles.navMargin}><Link style={{ textDecoration: "none", color: "#ff9450" }} to="/projects">Projects</Link></h3>
                <h3 style={{ ...styles.navMargin }}><Link className="link" style={{ textDecoration: "none", }} to="/skills">Skills</Link></h3>
                <h3 style={{ ...styles.navMargin, marginRight: "3%" }}><Link className="link" style={{ textDecoration: "none" }} to="/contact">Contact</Link></h3>
            </div>
            <div className="projects">
                <div className="project1" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="http://crypto-dash.surge.sh/" target="_blank" rel="noopener noreferrer">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#ff9450", padding: "2%" }}>Crypto Dash</h1>
                                <h4>
                                    App to help users quickly track cryptocurrency stocks live whilst keeping up to date with the latest crypto news.
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>React, JavaScript, MongoDB, Mongoose, Axios, Node.js, JSX, HTML, & CSS</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project2" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="http://cuisine-hunter.surge.sh/" target="_blank" rel="noopener noreferrer">
                            <div className='projectInfo' style={{ marginTop: "-1em" }}>
                                <h1 className="nav" style={{ color: "#ff9450", padding: "2%" }}>Cuisine Hunter</h1>
                                <h4>
                                    An app created with React.js to help users find restuarants in Utah serving desired cuisines.
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>JavaScript, React, Axios, HTML, CSS, & JSX</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project3" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="http://app-28-of-30.surge.sh/" target="_blank" rel="noopener noreferrer">
                            <div className='projectInfo' style={{ marginTop: "-1em" }}>
                                <h1 className="nav" style={{ color: "#ff9450", padding: "2%" }}>Zoozle</h1>
                                <h4>
                                    A replica of Google created to help users search and find desired content.
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>
                                    JavaScript, React, JSX, Axios, FAROO Web Search API, HTML, & CSS.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project4" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="http://app-19-of-30.surge.sh/" target="_blank" rel="noopener noreferrer">
                            <div className='projectInfo' style={{ marginTop: "-1em" }}>
                                <h1 className="nav" style={{ color: "#ff9450", padding: "2%" }}>Fake ID</h1>
                                <h4>
                                    Fake ID generating app that users can interact/role play with generated ID's.
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>
                                    JavaScript, React, JSX, Axios, UI Names API, HTML, & CSS.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project5" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="http://30-apps-challenge.surge.sh/" target="_blank" rel="noopener noreferrer">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#ff9450", padding: "2%" }}>30 React Apps</h1>
                                <h4>
                                    A challenge to create 30 apps in 30 days. Inspired by Jennifer Dewalt.
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>React, JavaScript, multiple third party API's, Axios, Node.js, JSX, HTML, & CSS</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project6" style={{ cursor: "pointer", backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "vh" }}>
                    <div className='middle'>
                        <a href="http://javascript30-home.surge.sh/" target="_blank" rel="noopener noreferrer">
                            <div className='projectInfo' style={{ marginTop: "-1.5em" }}>
                                <h1 className="nav" style={{ color: "#ff9450", padding: "2%" }}>
                                    JavaScript 30
                                </h1>
                                <h4>
                                    A challenge to create 30 pure vanilla Javascript apps in 30 days. Inspired by Wes Bos.
                                </h4>
                                <p style={{ color: "lime", padding: "5%", margin: 0 }}>
                                    JavaScript, HTML, & CSS
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;