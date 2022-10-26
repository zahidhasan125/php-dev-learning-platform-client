import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    console.log(courseDetails);
    return (
        <div>
            <h2>Course Details</h2>
        </div>
    );
};

export default CourseDetails;