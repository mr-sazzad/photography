import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, description, name, img, price } = service;
    const navigate = useNavigate();
    
    const NavigateToOrdersPage = id => {
        navigate(`/orders/${id}`)
    };
    return (
        <div className='card-container'>
            <img src={img} alt='images' />
            <h2 className='text-2xl font-mono'>{name}</h2>
            <p className='text-xl font-mono'>Price : {price}</p>
            <p className='text-left pl-5 font-mono'>{description}</p>
            <button onClick={() => NavigateToOrdersPage(id)} className='ring-2 px-3 rounded-full font-mono mb-5'>Hire me</button>
        </div>
    );
};

export default Service;