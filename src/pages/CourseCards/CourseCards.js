import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseCards = () => {
    const courses = useLoaderData();
    return (
        <div className='grid gap-4 grid-cols-1 lg:grid-cols-3'>
            {
                courses.map(course => {
                    return <div key={course.id} className=" dark:text-slate-300 card w-9/10 lg:w-full bg-primary text-primary-content">
                            <Link to={`/courses/details/${course.id}`}>
                                <div className="card-body p-4 cursor-pointer">
                                    <h2 className="card-title">{course.id}.) {course.name}</h2>
                                </div>
                            </Link>
                        </div>
                })
            }
        </div>
    );
};

export default CourseCards;