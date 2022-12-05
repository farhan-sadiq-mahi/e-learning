import React from 'react';
import { Link } from 'react-router-dom';

const MainCourse = ({ data }) => {

    return (
        <div className="card p-5 card-compact bg-base-100 shadow-xl">
            <figure><img className='object-fill h-48 w-96 md:w-84' src={data.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold text-secondary-focus">{data.name}</h2>
                <p>Learn <strong>{data.name}</strong> with the best tuitor over the world. <br /> Start today and start coding </p>
                <div className="card-actions">
                    <Link to={`/courses/${data.id}`} className="btn btn-primary w-full text-base-100 font-medium rounded-md">
                        Get Start</Link>
                </div>
            </div>
        </div>
    );
};

export default MainCourse;