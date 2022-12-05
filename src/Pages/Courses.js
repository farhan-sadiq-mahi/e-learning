import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import SideNav from '../Component/SideNav';

const Courses = () => {
    const coursesData = useLoaderData();
    return (
        <div className=' grid grid-cols-7 gap-5'>
            <div className=' hidden md:block md:col-span-2'>
                <SideNav data={coursesData} />
            </div>
            <div className='col-span-7 md:col-span-5 text-center'>
                <Outlet />
            </div>
        </div>
    );
};

export default Courses;