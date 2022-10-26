import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails);
    return (
        <div>
            <div className="card w-full bg-slate-200 shadow-xl">
                <figure><img className='rounded-xl' src={courseDetails?.courseImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">
                        {courseDetails?.courseTitle}                        
                    </h2>
                    <h3 className='card-header text-2xl'>{courseDetails?.courseHeader}</h3>
                    <p dangerouslySetInnerHTML={{ __html: courseDetails?.courseDetails }}></p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;