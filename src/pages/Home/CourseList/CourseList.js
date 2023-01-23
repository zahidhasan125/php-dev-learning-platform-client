import React from 'react';

const CourseList = ({ courseList }) => {
    console.log(courseList);
    return (
        <div className='my-8 px-4'>
            <h2 className='text-center text-4xl'>Our Course Outline</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4'>
                {

                    courseList.map(course => <button className='text-center text-white font-bold text-lg p-2 rounded-md bg-gradient-to-r from-emerald-700 via-green-700 to-lime-700 dark:from-stone-900 dark:via-zinc-900 dark:to-slate-900 border-none btn btn-outline h-auto'>{course.name}</button>)
                }
            </div>
        </div>
    );
};

export default CourseList;