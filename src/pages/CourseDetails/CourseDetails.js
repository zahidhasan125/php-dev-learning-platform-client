import React from 'react';
import { FaCrown } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    return (
        <div>

            <div className="card w-full bg-slate-200 shadow-xl dark:bg-slate-600 dark:text-sky-400">
                <figure className='pt-4'><img className='rounded-xl' src={courseDetails?.courseImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl text-center">
                        {courseDetails?.courseTitle}
                    </h2>
                    <hr />
                    <h3 className='card-header font-semibold text-xl'>{courseDetails?.courseHeader}</h3>
                    <p dangerouslySetInnerHTML={{ __html: courseDetails?.courseDetails }}></p>
                    <div className="card-actions justify-center"><Link to={`/checkout/${courseDetails.courseId}`} className="btn btn-primary text-orange-400"><FaCrown className='mr-2 text-2xl' />Get Premium Access</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;