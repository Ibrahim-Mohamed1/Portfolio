import React from 'react';
import {Link} from "react-router-dom"
import logo from "./logo.png"

const Projects = () => {
    const styles={
        parent:{
            display: "flex",
            flexDirection:"row",
            justifyContent:"space-around",
            margin: "1%"
        },
        logo:{
            width: 50,
            height: 50,
            marginRight: "auto",
            cursor: "pointer"
        },
        navMargin:{
            marginLeft: "5%",
            textDecoration: "none"
        },
        project:{
            display:"inline-block",
            margin: "0% 2%", 
            border:"solid ",
            borderRadius: 10,
            backgroundColor:"rgba(255, 255, 255, 0.8)",
            marginTop: 20,
            marginBottom: 10,
            height: 280,
            width: 400
        }
    }
    return (
        <>
            <div style={styles.parent}>
                <a style={{marginRight: "auto"}} href="/"><img className="nav" style={styles.logo} src={logo} alt=""/></a>
                <h3 style={{...styles.navMargin}}><Link className="link" style={{ textDecoration: "none"}}  to="/">Home</Link></h3>
                <h3 className="nav" style={styles.navMargin}><Link style={{ textDecoration: "none",color:"#ff9450"}}  to="/projects">Projects</Link></h3>
                <h3 style={{...styles.navMargin}}><Link className="link" style={{ textDecoration: "none",}} to="/resume">Resume</Link></h3>
                <h3 style={{...styles.navMargin, marginRight:"3%"}}><Link className="link" style={{ textDecoration: "none"}}  to="/contact">Contact</Link></h3>
            </div>
            <div className="projects">
                <div className="project1" style={{ cursor:"pointer", backgroundSize: "cover", backgroundRepeat:"no-repeat", height: "vh"}}>
                    <div className='middle'>
                        <a href="http://cuisine-hunter.surge.sh/" target="_blank" rel="noopener noreferrer">
                            <div className='projectInfo' style={{marginTop:"-1em"}}>
                                <h1 className="nav" style={{color:"#ff9450", padding:"2%"}}>Cuisine Hunter</h1>
                                <h4>An app created with React.js to help users find restuarants in Utah serving desired cuisines.
                                </h4>
                                <p style={{color:"lime", padding:"5%", margin: 0}}>JavaScript, React, Axios, HTML, CSS, & JSX</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project2" style={{ cursor:"pointer", backgroundSize: "cover", backgroundRepeat:"no-repeat", height: "vh"}}>
                    <div className='middle'>
                        <a href="http://crypto-dash.surge.sh/" target="_blank" rel="noopener noreferrer">
                            <div className='projectInfo' style={{marginTop:"-1.5em"}}>
                                <h1 className="nav" style={{color:"#ff9450", padding:"2%"}}>Crypto Dash</h1>
                                <h4>
                                    An app created with React.js to help users quickly track cryptocurrency stocks live whilst keeping up to date with the latest crypto news.
                                </h4>
                                <p style={{color:"lime", padding:"5%", margin: 0}}>React, JavaScript, MongoDB, Mongoose, Axios, Node.js, JSX, HTML, & CSS</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project3" style={{cursor:"pointer", backgroundSize: "cover", backgroundRepeat:"no-repeat", height: "vh"}}>
                    <div className='middle'>
                        <a href="http://newsies.surge.sh/" target="_blank" rel="noopener noreferrer">
                            <div className='projectInfo' style={{marginTop:"-1em"}}>
                            <h1 className="nav" style={{color:"#ff9450", padding:"2%"}}>Newsies</h1>
                            <h4>
                                An app created with React.js to help users find news articles with searched information.
                            </h4>
                            <p style={{ color:"lime", padding:"5%", margin: 0}}>React, JavaScript, MongoDB Mongoose, Axios, Node.js, JSX, HTML, & CSS</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="project5 project4" style={{ cursor:"pointer", backgroundSize: "cover", backgroundRepeat:"no-repeat", height: "vh"}}>
                    <div className='middle'>
                        <a href="http://ibrahim-axios.surge.sh/" target="_blank" rel="noopener noreferrer">
                            <div className='projectInfo' style={{marginTop:"-1.2em"}}>
                                <h1 className="nav" style={{color:"#ff9450", padding:"2%"}}>To Do List</h1>
                                <h4>
                                    An app created with vanilla JavaScript designed to help users organize/manage to do items on their to do list.
                                </h4>
                                <p style={{color:"lime", padding:"5%", margin: 0}}>Pure vanilla JavaScript, HTML, Axios, & CSS</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;