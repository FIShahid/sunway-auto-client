import React from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';


const SeeProfile = () => {

    const navigate = useNavigate()

    const { data: profile, isLoading } = useQuery('profile', () => fetch('https://thawing-fortress-89625.herokuapp.com/profile', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',

        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const navigateUpdate = (id) => {

        navigate(`/dashboard/updateProfile/${id}`)
    }


    return (
        <div>
            this is your Profile: {profile.length}
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>education</th>
                            <th>location</th>
                            <th>linkedn</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>



                        {
                            profile.map((p, index) =>

                                <tr key={p._id} class="active">
                                    <th>{index + 1}</th>
                                    <td>{p.name}</td>
                                    <td> {p.email} </td>
                                    <td> {p.education} </td>
                                    <td> {p.location} </td>
                                    <td> {p.linkdin} </td>
                                    <td> <button onClick={()=>navigateUpdate(p._id)} className='btn btn-xs'>Update</button> </td>
                                </tr>

                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SeeProfile;