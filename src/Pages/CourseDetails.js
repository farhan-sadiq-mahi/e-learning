import React from 'react';
import { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print'
const CourseDetails = () => {
    const coursesData = useLoaderData();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Course Details",
        onAfterPrint: () => alert('Print Success')

    })

    return (
        <div className='my-5'>
            <button onClick={handlePrint} className="btn btn-outline btn-secondary">Download Details PDF</button>
            <div ref={componentRef}>
                <div className="card my-5">
                    <img className='rounded-lg w-1/2 mx-auto' src={coursesData.img} alt="Album" />
                </div>
                <h1 className='text-warning font-bold text-4xl my-5'>{coursesData.name}</h1>
                <p>
                    Jumpstart your coding journey with our Regular Courses! By embracing problem-based and project-based learning, we develop your child’s core skills for today, tomorrow and beyond: Critical thinking, Communication, Collaboration, & Creativity. From Minecraft, App Development to Python, our regular courses are a perfect blend of theories, group activities and exercises for children at all skill levels. Students with no coding experience are recommended to start at Level 1.

                    As official Global Training Partners of Microsoft and Minecraft, our curriculum is fast evolving to democratize Artificial Intelligence and stay ahead of the hottest tech trends. This term, we are adding new courses such as AI with Scratch, NFTs with Scratch and VEX Robotics!
                </p>
            </div>
            <Link to={`/courses/premium/${coursesData.id}`}> <button className=" my-5 btn btn-outline btn-info rounded-lg">Get Premium Access</button></Link>
        </div>
    );
};

export default CourseDetails;