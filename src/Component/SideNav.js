import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({ data }) => {
    return (
        <div className='bg-secondary-focus text-center sticky top-0'>
            <h1 className='font-extrabold p-3 text-base-100 mb-5'> Get All The Latest Courses</h1>
            <ul className="menu">
                {
                    data.map(course => <li key={course.id}><Link to={`/courses/${course.id}`} className='font-bold text-base-200'>
                        <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={course.img} alt='courseImg' />
                            </div>
                        </div>
                        {course.name}
                    </Link></li>)
                }
            </ul>

        </div>
    );
};

export default SideNav;