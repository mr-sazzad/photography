import React from 'react';

const Footer = () => {
    return (
        <div>
            <p className='text-gray-700 mb-10'>Copyright <span>&copy;{/\d{4}/.exec(Date())[0]} photography.inc</span></p>
        </div>
    );
};

export default Footer;