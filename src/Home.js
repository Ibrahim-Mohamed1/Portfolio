import React from 'react';
import logo from "./logo.png"
import {Link} from "react-router-dom"

const Navbar = () => {
    const styles={
        parent:{
            display: "flex",
            flexDirection:"row",
            justifyContent:"space-between",
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
        introName:{
            textAlign: "center",
            fontSize: "5em",
            color: "gray",
            margin: '0'
        },
        introLine:{
            textAlign: "center",
            fontSize: "1.5em",
            color: "gray",
            marginTop: '0',
            marginBottom: '0',
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
                <img className="nav" style={styles.logo} src={logo} alt=""/>
                <h3 className="nav" style={{...styles.navMargin}}><Link style={{ textDecoration: "none",color:"#ff9450"}} to="/">Home</Link></h3>
                <h3 style={styles.navMargin}><Link className="link" style={{ textDecoration: "none"}}  to="/projects">Projects</Link></h3>
                <h3 style={{...styles.navMargin}}><Link className="link" style={{ textDecoration: "none"}} to="/resume">Resume</Link></h3>
                <h3 style={{...styles.navMargin, marginRight:"3%"}}><Link className="link" style={{ textDecoration: "none"}} to="/contact">Contact</Link></h3>
            </div>
            <h1 className="link" style={{...styles.introName, marginLeft:"46%", marginRight:"46%"}}><p className="nav" style={{color:"#ff9450", padding:"1%", margin: 0, marginTop:".75em", display:"inline-block"}}>Hi,</p></h1>
            <h1 style={styles.introName}> I'm <span className="link">Ibrahim Mohamed</span>.</h1>
            <h1 style={styles.introLine}>I'm a <p className="nav" style={{color: "#ff9450", display:"inline-block", paddingTop:"1%", paddingBottom:"1%"}}>Full Stack JavaScript Developer</p> based in <p className="nav" style={{color: "#ff9450", display:"inline-block", paddingBottom:"1%", paddingTop:"1%"}}>Salt Lake City</p>, Utah.</h1>
            <Link to="/projects" style={{textDecoration:"none"}}><button className="button nav" style={{...styles.button}}>Projects</button></Link>
        </>
    );
};

export default Navbar;