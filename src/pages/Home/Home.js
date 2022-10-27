import React from 'react';
import CarouselItem1 from '../../assets/carousel-1.jpg'
import CarouselItem2 from '../../assets/carousel-2.jpg'
import CarouselItem3 from '../../assets/carousel-3.jpg'
import CarouselItem4 from '../../assets/carousel-4.jpg'

const Home = () => {
    return (
        <div className='w-4/5 mx-auto mt-4'>
            <div className='text-base-400 py-4 text-center'>
                <h1 className='text-4xl font-bold underline'>Welcome</h1>
                <h4 className='text-2xl font-semibold'>Welcome to the PHP.DEV free interactive PHP tutorial.</h4>
                <p className='text-lg'>Whether you are an experienced programmer or not, this website is intended for everyone who wishes to learn the PHP programming language.</p>
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
        </div>
    );
};

export default Home;