import React from 'react';
import { withRouter } from 'react-router-dom';


const Footer = (props) => {
  const redirectToContact = () => props.history.push('/contact');
  const redirectToHome = () => props.history.push('/home');
  
    return (
      <div className="footer-links d-flex justify-content-around">
        <div className="text-center">
          <p className="text-center" onClick={ redirectToContact }>Contact us</p>
          <p className="text-center" onClick={ redirectToHome }>Home</p>
        </div>
      </div>
    );
}

export default withRouter(Footer);
