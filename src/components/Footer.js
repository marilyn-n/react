import React from 'react';
import { withRouter } from 'react-router-dom';


const Footer = (props) => {
  const redirectToContact = () => props.history.push('/contact');
  const redirectToHome = () => props.history.push('/home');
  
    return (
      <div className="footer-links bg-light pt-3">
        <div className="text-center d-flex justify-content-around">
          <p className="cursor-pointer" onClick={ redirectToContact }>Contact us</p>
          <p className="cursor-pointer" onClick={ redirectToHome }>Home</p>
        </div>
      </div>
    );
}

export default withRouter(Footer);
