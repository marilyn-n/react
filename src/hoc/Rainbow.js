import React from 'react';

const Rainbow = (WrappedComponent) => {

  const colours = ['primary', 'secondary', 'warning', 'error', 'success', 'info'];
  const randomColour = colours[Math.floor(Math.random() * 5)];
  const className = `text-${randomColour}`;

    return (props) => {
      return(
        <div className={className}>
          <WrappedComponent {...props}/>
        </div>
      )
      
    }
    
  }

export default Rainbow;
