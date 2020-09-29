import React, { useState, useEffect } from 'react';
import Review from './Review';

import { useDispatch,useSelector } from 'react-redux'
import * as itemsApi from '../api/items'

const Item = ({ value: product }) => {

    const [tab, setTab] = useState(1);
    const dispatch = useDispatch()
    
    const reviews = useSelector(state=>state.reviews[product.id]||[])
    const cart=useSelector(state=>state.cart)

    useEffect(() => {
        if(tab===3){
            dispatch(itemsApi.loadReviews(product.id))
        }
    }, [tab])

    const handleTabChange = (e, tabIndex) => {
        e.preventDefault();
        setTab(tabIndex)
    }

    const renderReviews = () => {
        return reviews.map((review, idx) => {
            return <Review value={review} key={idx} />
        })
    }

    const renderTabPanel = (product) => {
        switch (tab) {
            case 1: return (<div>{product.description}</div>)
            case 2: return (<div>{"Not yet"}</div>)
            case 3: return (<div>{renderReviews()}</div>)
            default: return null;
        }
    }
    const handleBuy = () => {
        // dispatch action to redux store
        let action = { type: 'BUY', item: product, qty: 1 }
        dispatch(action)
    }
    const renderBuyBtn = product => product.canBuy ? <button onClick={e => handleBuy()} className="btn btn-sm btn-dark">buy</button> : null
    return (
        <div>
            <div className="row">
                <div className="col-3">
                    <img className="img-fluid" alt={product.name} src={product.imagePath} />
                </div>
                <div className="col-9">
                    <h5>{product.name}</h5>
                    <h6>&#8377;{product.price}</h6>
                    {renderBuyBtn(product)}  &mdash; <span>{cart[product.id]?cart[product.id].qty:0}</span>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className={`nav-link ${tab === 1 ? 'active' : ''}`} onClick={e => handleTabChange(e, 1)} href="/">Description</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${tab === 2 ? 'active' : ''}`} onClick={e => handleTabChange(e, 2)} href="/">Specification</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${tab === 3 ? 'active' : ''}`} onClick={e => handleTabChange(e, 3)} href="/">Reviews</a>
                        </li>
                    </ul>
                    {renderTabPanel(product)}
                </div>
            </div>
        </div>
    );
};

export default Item;