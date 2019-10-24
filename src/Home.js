import React from 'react';
import logo from "./logo.png"
import {Link} from "react-router-dom"

const Home = () => {
    const styles={
        parent:{
            display: "flex",
            flexDirection:"row",
            justifyContent:"space-between",
            padding: 10
        },
        logo:{
            width: 40,
            marginRight: "auto"
        },
        navMargin:{
            marginLeft: "5%",
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
        <div>
            <div style={styles.parent}>
                <a style={{marginRight: "auto"}} href="/"><img className="nav" style={styles.logo} src={logo} alt=""/></a>
                <h3 className="nav" style={{...styles.navMargin}}><Link style={{ textDecoration: "none",color:"#ff9450"}} to="/">Home</Link></h3>
                <h3 style={styles.navMargin}><Link className="link" style={{ textDecoration: "none"}}  to="/projects">Projects</Link></h3>
                <h3 style={{...styles.navMargin}}><Link className="link" style={{ textDecoration: "none"}} to="/skills">Skills</Link></h3>
                <h3 style={{...styles.navMargin, marginRight:"3%"}}><Link className="link" style={{ textDecoration: "none"}} to="/contact">Contact</Link></h3>
            </div>
            <h1 style={{...styles.introName, textAlign:"center"}}><p className="nav" style={{color:"#ff9450", padding:"1%", margin: 0, marginTop:".75em", display:"inline-block", cursor:"default"}}>Hi,</p></h1>
            <h1 style={{...styles.introName}}> I'm <span className="link" style={{cursor:"default"}}>Ibrahim Mohamed</span>.</h1>
            <h1 style={styles.introLine}>I'm a <p className="nav" style={{color: "#ff9450", display:"inline-block", paddingTop:"1%", paddingBottom:"1%", cursor:"default"}}>Full Stack Developer</p> based in <p className="nav" style={{color: "#ff9450", display:"inline-block", paddingBottom:"1%", paddingTop:"1%", cursor:"default"}}>Salt Lake City</p>, Utah.</h1>
            <Link to="/projects" style={{textDecoration:"none"}}><button className="button nav" style={{...styles.button}}>Projects</button></Link>
        </div>
    );
};

export default Home;