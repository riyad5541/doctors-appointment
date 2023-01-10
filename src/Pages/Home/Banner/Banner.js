import React from 'react';

const Banner = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://www.greenhavenpediatricdentistry.com/wp-content/uploads/little-girl-getting-dental-exam.jpg" alt='sd' className="rounded-lg lg:w-1/2 shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">We care about your teeth</h1>
                    <p className="py-6">Dental care is very essential and fundamental to all around health of an individual.Let us take care.</p>
                    <button className="btn text-white bg-gradient-to-r from-sky-500 to-indigo-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;