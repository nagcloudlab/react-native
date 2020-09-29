import React, { useState, useEffect } from 'react';
import Item from './Item';

const ItemList = ({ onBuy }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const apiUrl = "http://localhost:8080/api/items"
        let promise = fetch(apiUrl)
        promise
            .then(response => response.json())
            .then(products => setProducts(products))
 
    }, [])
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