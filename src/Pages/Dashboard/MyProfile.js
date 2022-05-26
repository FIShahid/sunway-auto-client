import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';


const MyProfile = () => {
  const [user,email] = useAuthState(auth);
  const { register, handleSubmit, reset, formState } = useForm();
  const[datas,setDatas]=useState([])
  const onSubmit = userData => {
      console.log(userData);
   const url = 'https://thawing-fortress-89625.herokuapp.com/profile';
        
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(result => {
          
            console.log(result);
            if(result.success){
              alert('done')
            }
            else{
              alert('user exists')
            }
            fetch(`https://thawing-fortress-89625.herokuapp.com/profile/${user.email}`)
            .then(res=>res.json())
            .then(data=>setDatas(data))
            
        })
        console.log(datas);

  }
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl rounded-none">
        <div className="card-body">
          <h2 className=" font-bold text-center">User Name: {user.displayName}</h2>
          <p className="text-center font"> User Email: {user.email}</p>
        </div>
      </div>
      <div>
        <div className="mt-5 text-center w-96 bg-base-100 shadow-xl rounded-none">
          <div className="card-body">
            <h2 className="card-title">Add information here.</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input  {...register("customerName")} value={user.displayName} type="text" placeholder="" className="hidden input input-bordered input-secondary w-full max-w-xs rounded-none" /><input  {...register("email")} type="text" value={user.email} placeholder="" className="  hidden input input-bordered input-secondary w-full max-w-xs rounded-none" />
              <label htmlFor="">Education</label>
              <input  {...register("education")} type="text" placeholder="" className="input input-bordered input-secondary w-full max-w-xs rounded-none" />
              <label htmlFor="">Location/City</label>
              <input {...register("location")} type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs rounded-none" />
              <label htmlFor="">Phone</label>
              <input {...register("phone")} type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs rounded-none" />
              <label htmlFor="">LinkDin</label>
              <input {...register("linkdin")} type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs rounded-none" />
              <button className='btn btn-secondary mt-3' type='submit'>Submit</button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MyProfile;