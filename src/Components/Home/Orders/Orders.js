import React from 'react';
import { useParams } from 'react-router-dom';

const Orders = () => {
    const {ordersId} = useParams();
    return (
        <div>
            <p>this is order page{ordersId}</p>
            
        </div>
    );
};

export default Orders;