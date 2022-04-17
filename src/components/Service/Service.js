import React from 'react';
import './Service.css';
import { ArrowRightIcon } from '@heroicons/react/solid'


const Service = ({ product }) => {
    const { img, title, body, price } = product;

    return (
        <div className='bg-slate-100 p-4 rounded-md'>
            <img className='min-w-full rounded-xl' src={img} alt="" />

            <h2 className='text-2xl mt-2'>{title}</h2>
            <p className='text-xl my-2'>Price: ${price}</p>
            <button className='see-details-button'>
                <span>See details</span>
                <ArrowRightIcon className='icon'></ArrowRightIcon>
            </button>

        </div>
    );
};

export default Service;