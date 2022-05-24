import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyReview = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data);
        const url = 'http://localhost:5000/review'
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
            <form onSubmit={handleSubmit(onSubmit)}>

                <div class="lg:w-max-lg ">
                    <div class="hero-content ">

                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Your Name</span>
                                    </label>
                                    <input className='mb-2 ' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                                </div>
                                <div className="form-control">
                                <input className='mb-2' placeholder='Ratings' type="number" {...register("rating")} />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Your Review</span>
                                    </label>
                                    <textarea className='mb-2' placeholder='Description' {...register("description")} />
                                </div>
                                <div class="form-control mt-6">
                                <input onClick={handleAddSubmit} type="submit" value="Add Review" className='btn'style={{ backgroundColor: '#66bb6a' }} />
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