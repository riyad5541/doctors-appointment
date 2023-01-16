import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://www.greenhavenpediatricdentistry.com/wp-content/uploads/little-girl-getting-dental-exam.jpg" alt='sd' className="rounded-lg lg:w-1/2 shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">We care about your teeth</h1>
                    <p className="py-6">Dental care is very essential and fundamental to all around health of an individual.Let us take care.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;