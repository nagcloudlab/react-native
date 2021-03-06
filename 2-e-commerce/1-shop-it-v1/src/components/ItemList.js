import React, { useState } from 'react';
import Item from './Item';

const ItemList = ({ onBuy }) => {
    const [products] = useState(
        [
            {
                id: 1,
                name: 'Laptop',
                price: 149000.00,
                description: 'New mac pro',
                canBuy: true,
                imageUri: 'images/Laptop.png'
            },
            {
                id: 2,
                name: 'Mobile',
                price: 14000.00,
                description: 'New  pro',
                canBuy: true,
                imageUri: 'images/Mobile.png'
            }
        ]
    )
    const renderProducts = () => {
        return products.map(product => {
            return (
                <div key={product.id} className="list-group-item">
                    <Item onBuy={onBuy} value={product} />
                </div>
            )
        })
    }
    return (
        <div className="container">
            {renderProducts()}
        </div>
    );
};

export default ItemList;