import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Everyday 360. All rights reserved.</p>
          {/* Add any additional footer content or links here */}
        </footer>
    );
}

export default Footer;
