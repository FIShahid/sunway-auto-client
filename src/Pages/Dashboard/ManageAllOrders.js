import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import OrderRow from './OrderRow';
import ProductRow from './ProductRow';

const ManageAllOrder = () => {
    const [ orderCollection, setOrderCollection] = useState([]);
    // const {data: order, isLoading , refetch} = useQuery('products', ()=>fetch('http://localhost:5000/order').then(res => res.json()));

    // if(isLoading) {
    //     return <Loading></Loading>
    // }
    useEffect(() => {
        const url = 'https://thawing-fortress-89625.herokuapp.com/order'
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setOrderCollection(data))

    }, [])



    return (
        <div>
            <h2>Manage Product :{orderCollection.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        orderCollection.map((product, index) => <OrderRow
                                key={product._key}
                                product={product}
                                index={index}
                                // refetch={refetch}
                                // setDeletingProduct={setDeletingProduct}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {/* {deletingProduct && <DeleteConfirmModal
                deletingProduct={deletingProduct}
                refetch={refetch}
                setDeletingProduct={setDeletingProduct}
            ></DeleteConfirmModal>} */}
        </div>
    );
};

export default ManageAllOrder;