import React from 'react';
import './Summary.css'

const Summary = () => {
  return (
    <div > 
      <div>
        <h2 className='text-3xl font-bold text-center mt-12 mb-8'>Buisness Summary</h2>
      </div>
      <div  className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      <div class="counter">
      <i class="fa fa-code fa-2x"></i>
      <h2 class="count-title ">1000</h2>
       <p class="count-text ">Our Customer</p>
    </div>
      <div class="counter">
      <i class="fa fa-code fa-2x"></i>
      <h2 class="count-title ">1000</h2>
       <p class="count-text ">Our Customer</p>
    </div>
      <div class="counter">
      <i class="fa fa-code fa-2x"></i>
      <h2 class="count-title ">1000</h2>
       <p class="count-text ">Our Customer</p>
    </div>
      </div>
    </div>
  );
};

export default Summary;