import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    const styles = {
        parent:{
            display:"flex",
            justifyContent:"center",
            position:"fixed",
            bottom: 0,
            width:"100vw",
            marginTop: 50
        },
        socialIcons:{
            margin: 7.5
        }
    }
    return (
        <div style={styles.parent}>
            <SocialIcon className="nav" style={styles.socialIcons} target="_blank" url="https://www.linkedin.com/in/ibrahim-mohamed-/" network="linkedin" bgColor="black" fgColor="#ff9450"/>
            <SocialIcon className="nav" style={styles.socialIcons} target="_blank" url="https://github.com/ibrahim-mohamed1" network="github" bgColor="black" fgColor="#ff9450"/>
        </div>
    );
};

export default Footer;