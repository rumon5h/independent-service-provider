import React from 'react';
import Service from '../../Service/Service';


const services = [
    {
        id: 1,
        img: 'https://i.ibb.co/b6DcLrz/25-HP-Solar-Panels-D.png',
        title: 'Tesla 25 HP Solar Panel D',
        body: 'Our solar panels are low-profile and durable — quietly converting sunlight to energy for decades to come. Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic',
        price: 10000,
    },
    {
        id: 2,
        img: 'https://i.ibb.co/qp8YWRX/model3.png',
        title: 'Tesla model 3',
        body: 'Tesla designed Model 3 from the ground-up as an electric vehicle using system-level integration throughout. Each component, including batteries, motors and even exterior aerodynamics are optimized to benefit from one another and create one of the most efficient, yet unbelievably powerful vehicles ever built.',
        price: 101000,
    }
]

const Services = () => {
    return (
        <div className='p-5'>
            <h3 className='text-3xl text-center mb-4'>Our Services</h3>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2 items-center'>
                {
                    services.map(product => <Service
                        key={product.id}
                        product={product}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;