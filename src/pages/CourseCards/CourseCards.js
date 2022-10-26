import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseCards = () => {
    const courses = useLoaderData();
    return (
        <div className='grid gap-4 grid-cols-3'>

            {
                courses.map(course => {
                    return <div key={course.id} className="card w-48 bg-primary text-primary-content">
                        <Link to={`/courses/details/${course.id}`}>
                            <div className="card-body cursor-pointer">
                                <h2 className="card-title">{course.id}.{course.name}</h2>
                            </div>
                        </Link>
                    </div>
                })
            }

        </div>
    );
};

export default CourseCards;