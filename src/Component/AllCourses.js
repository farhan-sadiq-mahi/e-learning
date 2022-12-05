import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MainCourse from './MainCourse';

const AllCourses = () => {
    const coursesData = useLoaderData();
    return (
        <div>
            <h1 className='text-4xl font-bold my-5'><span className='text-warning'>Learn Programming</span> and <br /> Type Your <span className='text-secondary-focus'>First Line of Code</span></h1>
            <div className='flex flex-col md:flex-row flex-wrap justify-center gap-4 my-5'>
                {
                    coursesData.map(course => <MainCourse data={course} key={course.id} />)
                }
            </div>

        </div>
    );
};

export default AllCourses;