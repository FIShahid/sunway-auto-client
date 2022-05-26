import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyReview = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data);
        const url = 'https://thawing-fortress-89625.herokuapp.com/review'
        fetch(url,{ 
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result=>{
            console.log(result)
        })

    }
    const handleAddSubmit =e =>{
        toast("Your Item Successfully Added");
    }
    return (
        <div>
            <h2 className="text-center mt-8 mb-6 text-3xl font-bold">Add Your Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="lg:w-max-lg ">
                    <div className="hero-content ">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input className='mb-2 ' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                                </div>
                                <div className="form-control">
                                <label className="label">
                                        <span className="label-text">Give a Ratings from 1-5</span>
                                    </label>
                                <input className='mb-2' placeholder='Ratings' type="number"
                                 {...register("rating")}
                                 />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Review</span>
                                    </label>
                                    <textarea className='mb-2' placeholder='Description' {...register("description")} />
                                </div>
                                <div className="form-control mt-6">
                                <input onClick={handleAddSubmit} type="submit" value="Add Review" className='btn btn-success' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MyReview;