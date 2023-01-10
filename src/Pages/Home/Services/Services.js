import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name:'Fluoride Treratment',
            description:'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities.',
            img:fluoride
        },
        {
            id: 2,
            name:'Cavity Treratment',
            description:' This is a treatment to repair and save a badly damaged or infected tooth instead of removing it.',
            img:cavity
        },
        {
            id: 3,
            name:'Whitening Treratment',
            description:'Teeth whitening involves bleaching the teeth to lighten their colour. After treatment, the teeth look a few shades whiter, but not usually bright white.',
            img:whitening
        },
    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h2 className='text-lg uppercase font-bold text-sky-700'>Our Services</h2>
                <h3 className='3xl'>Services we provide</h3>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;