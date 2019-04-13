import React from 'react';
import {Link} from "react-router-dom"
import logo from "./logo.png"
import resume from "./resume.png"
import pdf from "./resume.pdf"
// const pdf = require("./resume.pdf")


const Resume = () => {
    const styles={
        parent:{
            display: "flex",
            flexDirection:"row",
            justifyContent:"space-between",
            color:"white",
            margin: "1%"
        },
        logo:{
            width: 50,
            height: 50,
            marginRight: "auto"
        },
        navMargin:{
            marginLeft: "5%",
        },
        resume:{
            display:"block",
            margin:"auto",
            width:"55%",
            marginBottom: "6em",
            boxShadow:"-5px 5px 5px grey",
            border:"solid #ff9450",
            marginTop: "3em"
        },
        reachOut:{
            color:"white",
            textAlign:"center",
            marginTop: "1.5em",
        },
        button:{
            zoom: 2,
            display:"block",
            margin:"auto", 
            cursor:"pointer",
            outline:"none",
            borderRadius: 5,
            fontSize:".80em",
        }
    }
    return (
        <>
            <div style={styles.parent}>
                <a style={{marginRight: "auto"}} href="/"><img className="nav" style={styles.logo} src={logo} alt=""/></a>
                <h3  style={{...styles.navMargin, color:"#fbbc06"}}><Link className="link" style={{ textDecoration: "none"}} to="/">Home</Link></h3>
                <h3  style={styles.navMargin}><Link className="link" style={{ textDecoration: "none"}}  to="/projects">Projects</Link></h3>
                <h3 className='nav' style={{...styles.navMargin, color:"#fbbc06"}}><Link className="link" style={{ textDecoration: "none", color:"#ff9450"}} to="/resume">Resume</Link></h3>
                <h3  style={{...styles.navMargin, color:"#fbbc06", marginRight:"3%"}}><Link className="link" style={{ textDecoration: "none"}} to="/contact">Contact</Link></h3>
            </div>
            <br/>
            <a href={pdf} download>Download</a>
            <a href={pdf}><img src={resume} alt="resume"/></a>
        </>
    );
};

export default Resume;