import React from 'react';
import {Link} from "react-router-dom"
import logo from "./logo.png"
import profile from "./screenshots/profile.png"

const Contact = () => {
    const styles={
        parent:{
            display: "flex",
            flexDirection:"row",
            justifyContent:"space-around",
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
            textDecoration: "none"
        },
        profilePic:{
            display:"block",
            margin: "auto",
            width: 300,
            marginTop: '6em',
            borderRadius: 20
        },
        connect:{
            color:"#ff9450",
            textAlign:"center",
            marginTop: "1.5em",
            
        },
        email:{
            color:"white",
            textAlign:"center",
            marginTop: "1.5em",
            lineHeight: 1.3
        }
    }
    return (
        <>
            <div style={styles.parent}>
                <img style={styles.logo} src={logo} alt=""/>
                <h3  style={{...styles.navMargin, color:"#fbbc06"}}><Link style={{ textDecoration: "none",color:"white"}}  to="/">Home</Link></h3>
                <h3  style={styles.navMargin}><Link style={{ textDecoration: "none",color:"white"}}  to="/projects">Projects</Link></h3>
                <h3  style={{...styles.navMargin, color:"#fbbc06"}}><Link style={{ textDecoration: "none", color:"white"}} to="/resume">Resume</Link></h3>
                <h3 className='nav' style={{...styles.navMargin, color:"#fbbc06", marginRight:"3%"}}><Link style={{ textDecoration: "none",color:"#ff9450"}}  to="/contact">Contact</Link></h3>
            </div>
            <img style={styles.profilePic} src={profile} alt=""/>
            <h1 className="nav connect" style={styles.connect}>Let's connect :)</h1>
            <h3 style={styles.email}>
                Want to get in touch or have a 
                <br/>
                project idea to discuss? Email me 
                <br/>
                at <a style={{textDecoration: "none", color:"#ff9450"}} rel="noopener noreferrer" href="mailto:ibrahim.mohamed.dev@gmail.com">ibrahim.mohamed.dev@gmail.com</a>
                <br/>
                or message me on <a href="https://www.linkedin.com/in/ibrahim-mohamed-/" target="_blank" rel="noopener noreferrer"  style={{textDecoration: "none", color:"#ff9450"}}>LinkedIn</a>.
            </h3>
        </>
    );
};

export default Contact;