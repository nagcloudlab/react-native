import React, { useState, useEffect } from 'react';
import Item from './Item';

import * as itemsApi from '../api/items'
import { useDispatch, useSelector } from 'react-redux'

const ItemList = () => {
    const products = useSelector(state => state.items)
    const dispatch = useDispatch();
    useEffect(() => {
        let action = itemsApi.loadItems(); //async
        dispatch(action)
    }, [])
    const renderProducts = () => {
        return products.map(product => {
            return (
                <div key={product.id} className="list-group-item">
                    <Item value={product} />
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