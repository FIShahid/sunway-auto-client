import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

    // const imageStorageKey='4295ac4d47b569312bea67b440cdbdbb';

  
    const onSubmit = async data => {
        console.log("data" , data);
    //     const image = data.image[0];
    //     const formData = new FormData();
    //     formData.append('image', image);
    //     const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    //     fetch(url, {
    //         method: 'POST',
    //         body: formData
    //     })
    //     .then(res=>res.json())
    //     .then(result =>{
    //         if(result.success){
    //             const img = result.data.url;
    //             const doctor = {
    //                 name: data.name,
    //                 email: data.email,
    //                 specialty: data.specialty,
    //                 img: img
    //             }
    //             // send to your database 
    //             fetch('http://localhost:5000/doctor', {
    //                 method: 'POST',
    //                 headers: {
    //                     'content-type': 'application/json',
    //                     authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //                 },
    //                 body: JSON.stringify(doctor)
    //             })
    //             .then(res =>res.json())
    //             .then(inserted =>{
    //                 if(inserted.insertedId){
    //                     toast.success('Doctor added successfully')
    //                     reset();
    //                 }
    //                 else{
    //                     toast.error('Failed to add the doctor');
    //                 }
    //             })

    //         }
            
    //     })
    // }

    // if (isLoading) {
    //     return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl">Add a New Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("price", {
                            required: {
                                value: true,
                                message: 'value is Required'
                            },
                           
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                        
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Product</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Product Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("stock", {
                            required: {
                                value: true,
                                message: 'value is Required'
                            },
                           
                        })}
                    />
                    <label className="label">
                        {errors.stock?.type === 'required' && <span className="label-text-alt text-red-500">{errors.stock.message}</span>}
                        
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Order</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Minimum Order Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register("minOrder", {
                            required: {
                                value: true,
                                message: 'value is Required'
                            },
                           
                        })}
                    />
                    <label className="label">
                        {errors.minOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minOrder.message}</span>}
                        
                    </label>
                </div>
           

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Image</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;
