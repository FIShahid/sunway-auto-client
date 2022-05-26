import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyOrders(data))
        }
    }, [user])
    return (
        <div>
            <h2>My Order : {myOrders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                   
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Order Quantity</th>
                            <th>Price/unit</th>
                            <th>Action</th>
                            <th>Payment</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((orderList , index) =><tr key={index}>
                                <th>{index + 1}</th>
                                <td>{orderList.userName}</td>
                                <td>{orderList.userEmail}</td>
                                <td>{orderList.partsName}</td>
                                <td>{orderList.orderQuantity}</td>
                                <td>{orderList.pricePerUnit}</td>
                               
                                      <td>
                                    {(orderList.pricePerUnit && !orderList.paid) && <Link to={`/dashboard/payment/${orderList._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(orderList.pricePerUnit && orderList.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{orderList.transactionId}</span></p>
                                    </div>}
                                </td>
                                <td>{!orderList.paid && <button button className='btn btn-xs btn-error'>Cancel</button>}</td>
                            </tr>)
                        }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;