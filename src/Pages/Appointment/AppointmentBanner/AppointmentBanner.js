import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bg.png'

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <header 
        style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}
        className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://www.greenhavenpediatricdentistry.com/wp-content/uploads/little-girl-getting-dental-exam.jpg" alt='' className="w-1/2 rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                        <DayPicker
                          mode='single'
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;