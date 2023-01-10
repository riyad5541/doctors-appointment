import React from 'react';
import Banner from '../Banner/Banner';
import ExceptionalPart from '../ExceptionalPart/ExceptionalPart';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExceptionalPart></ExceptionalPart>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;