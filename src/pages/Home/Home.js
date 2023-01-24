import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CarouselItem1 from '../../assets/carousel-1.jpg'
import CarouselItem2 from '../../assets/carousel-2.jpg'
import CarouselItem3 from '../../assets/carousel-3.jpg'
import CarouselItem4 from '../../assets/carousel-4.jpg'
import UnlockPremium from './UnlockPremium/UnlockPremium';
import CourseList from './CourseList/CourseList';

const Home = () => {
    const courseList = useLoaderData();
    return (
        <div className='w-4/5 mx-auto mt-4'>
            <div className='text-base-400 dark:text-green-600 py-4 text-center w-full md:w-3/4 lg:w-3/5 mx-auto'>
                <h1 className='text-4xl font-bold underline'>Welcome</h1>
                <h4 className='text-2xl font-semibold'>Welcome to the PHP.DEV free interactive PHP tutorial.</h4>
                <p className='text-lg'>Whether you are an experienced programmer or not, this website is intended for everyone who wishes to learn the PHP programming language.</p>
                <div className="card-actions justify-center mt-3">
                    <Link to="/courses" className="btn btn-primary">Get Started</Link>
                </div>
            </div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-96">
                    <img src={CarouselItem4} className="w-full rounded-xl" alt='Carousel items' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-96">
                    <img src={CarouselItem3} className="w-full rounded-xl" alt='Carousel items' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-96">
                    <img src={CarouselItem2} className="w-full rounded-xl" alt='Carousel items' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-96">
                    <img src={CarouselItem1} className="w-full rounded-xl" alt='Carousel items' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <CourseList courseList={courseList} />
            <UnlockPremium />
        </div>
    );
};

export default Home;