import React, { useEffect, useState } from 'react';



const Review = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/review'
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setReview(data))

    }, [])


    return (
        <div >
            <h2 className='text-3xl font-bold text-center mt-12 mb-8'>Customer Review </h2>
            <div className='sm: w-h-screen' >
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>

                    {review.map((r, index) => <div key={index} className="card  bg-secondary text-white">
                        
                        <div className="card-body">
                            <h2 className="card-title font-bold uppercase text-white">{r.name}</h2>
                            <p className="text-white">Review :{r.description}</p>
                            <p className="text-white font-bold">Ratings: {r.rating}/5</p>
                        </div>
                    </div>)}

                </div>

            </div>


        </div>
    );
};

export default Review;