import React from 'react';
import './Summary.css'

const Summary = () => {
    return (
        <div>
            <div className="container">
                <h2 className='text-center mt-5 mb-3' style={{color:'#ef5350'}}>Warehouse Summary</h2>
    <div className="row">
    <div className="col-md-3">
      <div className="card-counter primary">
        <i className="fa fa-code-fork"></i>
        <span className="count-numbers text-white">20</span>
        <span className="count-name">Country</span>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card-counter danger">
        <i className="fa fa-ticket"></i>
        <span className="count-numbers">200</span>
        
        <span className="count-name">Seller</span>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card-counter success">
        <i className="fa fa-database"></i>
        <span className="count-numbers">68750</span>
        <span className="count-name">Product</span>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card-counter info">
        <i className="fa fa-users"></i>
        <span className="count-numbers">35000</span>
        <span className="count-name">Users</span>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Summary;