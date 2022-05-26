import React from 'react';
import './Summary.css'

const Summary = () => {
  return (
    <div className="mb-8" > 
      <div>
        <h2 className='text-3xl font-bold text-center mt-12 mb-8'>Buisness Summary</h2>
      </div>
      <div  className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      <div className="counter">
      
      <i className="fa fa-users fa-2x"></i>
      <h2 className="count-title ">1000+</h2>
       <p className="count-text ">Happy Clients</p>
    </div>
      <div className="counter">
      <i className="fa fa-flag fa-2x"></i>
      <h2 className="count-title ">50+</h2>
       <p className="count-text ">Country</p>
    </div>
      <div className="counter">
      <i className="fa fa-code-fork fa-2x"></i>
      <h2 className="count-title ">10000+</h2>
       <p className="count-text ">Products </p>
    </div>
      </div>
    </div>
  );
};

export default Summary;