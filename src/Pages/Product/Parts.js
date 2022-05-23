import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';



const Parts = () => {
    const { partsId } = useParams()
    const [product, setProduct] = useState({});
    const [error, setError] = useState('');
    const { _id, name, img, stock, minOrder, description, price } = product;
    const [user, loading, authError] = useAuthState(auth);


    useEffect(() => {
        if (partsId) {
            const url = `http://localhost:5000/parts/${partsId}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setProduct(data))

        }
    }, []);
    let [num, setNum]= useState(100);
    let incNum =()=>{
      if(num)
      {
      setNum(Number(num)+1);
      
      }
    };
    let decNum = () => {
       if(num>100)
       {
        setNum(num - 1);
       }
    }
    
   let handleChange = (e)=>{
     setNum(e.target.value);
    }
    
    if(num<minOrder){
        toast.error(" You Have to Buy Minimum Quantity")

    }
    if(num>=stock){
        toast.error(" We don't Have Enough Product at the moment!!! ")

    }

    const updateStock = id => {
        console.log(num);
        const newStock = (stock - parseInt(num));
        if (isNaN(newStock)) {
            setError("Input a Number")
            return
        }
        else {
            setError('')
        }
        console.log(parseFloat(newStock));
        const update = { ...product, stock: newStock }
        const url = `http://localhost:5000/parts/${partsId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                setProduct({ ...product, stock: newStock })
                

            })

    }


    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-4 mb-2'>Purchase Now!</h2>

            <div class="card card-compact mx-auto lg:max-w-lg bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p className='font-bold'>Price: ${price}</p>
                    <p className='font-bold'>Available Product: {stock}</p>
                    <p className='font-bold'>Minimum Order Quantity: {minOrder}</p>
                    <p>Description: {description}</p>
                    <div class="form-control mx-auto">
                        <label class="label">
                            <h4 className="font-bold mx-auto">Enter Product Quantity</h4>
                        </label>
                        <label class="input-group">
                            <button disabled={num>=stock} onClick={incNum}  class="btn "><i className="fa fa-plus fa-2x"></i></button>
                            <input  type="text" placeholder="100" value={num} onChange={handleChange } class="input input-bordered" />
                            <p>{error}</p>

                            
                  {
        <button onClick={decNum} disabled={num<minOrder} class="btn "><i className="fa fa-minus fa-2x"></i></button>
                  }
                        </label>
                    </div>

                   <div>
                       
                   <div class="card-actions justify-center">
                        <button className="btn btn-primary" disabled ={num<minOrder || num>stock} onClick={() => updateStock(_id)}  >Click Here to Place Order</button>
                    </div>
                   </div>
                </div>
            </div>


        </div>
    );
};

export default Parts;