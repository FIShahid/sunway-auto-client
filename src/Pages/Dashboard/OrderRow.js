import React from 'react';


const OrderRow = ({ order, index, refetch, setDeletingProduct }) => {
    const { partsName, userName , orderQuantity , paid , transactionId , address , userEmail   } = order;
    
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td>{partsName}</td>
            <td>{orderQuantity}</td>
            
           
           <td>{!transactionId &&  <button class="btn btn-sm btn-error">Pending</button>} {transactionId &&  <button class="btn btn-sm btn-success">Shipped</button>}</td>
           {/* <td>{transactionId &&  <button class="btn btn-sm">Shipped</button>}</td> */}
        </tr>
    );
};

export default OrderRow;