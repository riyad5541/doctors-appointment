import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const ExceptionalPart = () => {
    return (
        <div className="card card-side m-6">
            <figure className="px-10 pt-10 w-1/2 h-96">
                <img src={treatment} alt="Album" className='rounded'/>
            </figure>
            <div className="card-body  w-1/2">
                <h2 className="card-title text-5xl my-6">Exceptional Dental care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions justify-start mt-6">
                    <button className="btn text-white bg-gradient-to-r from-sky-500 to-indigo-500">GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalPart;