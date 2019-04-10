import React from 'react';
import {Link} from "react-router-dom"
import logo from "./logo.png"
import resume from "./resume.png"

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
            marginLeft: "8%",
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
                <img style={styles.logo} src={logo} alt=""/>
                <h3  style={{...styles.navMargin, color:"#fbbc06"}}><Link style={{ textDecoration: "none",color:"white"}} to="/">Home</Link></h3>
                <h3  style={styles.navMargin}><Link style={{ textDecoration: "none",color:"white"}}  to="/projects">Projects</Link></h3>
                <h3 className='nav' style={{...styles.navMargin, color:"#fbbc06"}}><Link style={{ textDecoration: "none", color:"#ff9450"}} to="/resume">Resume</Link></h3>
                <h3  style={{...styles.navMargin, color:"#fbbc06", marginRight:"3%"}}><Link style={{ textDecoration: "none", color:"white"}} to="/contact">Contact</Link></h3>
            </div>
            <h1 style={styles.reachOut}>Want to get in touch?</h1>
            <Link to="/contact" style={{textDecoration:"none"}}><button className="button nav" style={{...styles.button}}>Contact me</button></Link>
            <img style={styles.resume} src={resume} alt=""/>
        </>
    );
};

export default Resume;