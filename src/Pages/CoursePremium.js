import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const CoursePremium = () => {
    const coursesData = useLoaderData();
    const { user } = useContext(AuthContext)
    return (
        <div className='p-5'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='w-1/2'><img src={coursesData.img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-medium">Cource Name : <span className='font-bold'>{coursesData.name}</span></h2>
                    <small>Name: <span>{user?.displayName ? user.displayName : 'Username'}</span></small>
                    <small>Email: <span>{user?.email ? user.email : "user@email.com"}</span></small>
                    <p>Click on the checkout button to proceed !!</p>


                    <div className="card-actions ">
                        <button className="btn btn-primary w-full rounded-lg">Check Out</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePremium;