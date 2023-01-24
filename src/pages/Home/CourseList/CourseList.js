import React from 'react';
import {BiRightArrow} from 'react-icons/bi'
import { Link } from 'react-router-dom';

const CourseList = ({ courseList }) => {
    console.log(courseList);
    return (
        <div className='my-8 md:px-4'>
            <h2 className='text-center text-2xl md:text-4xl font-bold pb-2 my-4 border-b-4 border-black dark:text-white'>Our Course Outline</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4'>
                {

                    courseList.map(course => <Link to={`/courses/details/${course.id}`} className='flex text-center text-white font-bold text-lg p-2 rounded-md bg-gradient-to-r from-emerald-700 via-green-700 to-lime-700 dark:from-stone-900 dark:via-zinc-900 dark:to-slate-900 border-none btn btn-outline h-auto hover:translate-x-2'><BiRightArrow className='text-white' /><button className='flex-1'>{course.name}</button></Link>)
                }
            </div>
        </div>
    );
};

export default CourseList;