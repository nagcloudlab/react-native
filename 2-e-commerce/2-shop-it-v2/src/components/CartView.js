import React from 'react';

const CartView = ({ value: cart,onBuy }) => {
    let keys = Object.keys(cart);
    const renderCart = () => {
        return keys.map((key => {
            let cartLine = cart[key]
            let { item, qty } = cartLine
            return (
                <tr key={key}>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td><i onClick={e=>onBuy(item,1)} className="fa fa-plus"></i></td>
                    <td>{qty}</td>
                    <td><i onClick={e=>onBuy(item,-1)} className="fa fa-minus"></i></td>
                    <td>&#8377;{item.price*qty}</td>
                </tr>
            )
        }))
    }
    return (
        <div className="card">
            <div className="card-header">Item(s) in cart</div>
            <div className="card-body">
                <table className="table table-bordered">
                    <tbody>
                        {renderCart()}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CartView;