import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'

export const CartContainer = () => {
    const { cartItems, total, amount } = useSelector((store) => {return store.cart})
    
    return (
        <div className='container my-4'>
            <h3>Cart Details</h3>
            {amount < 1 ? <p>Your bag is empty!</p> :
            <div className="card col-md-5 col-sm-12">
                <div className="card-body">
                    <h5 className="card-title">Deposits/Withdraw money</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Per transaction: Rs. 500</h6>
                    <p className="card-text">Use this form to deposit/withdraw money by 500 Rs from your Bank Balance</p>
                    
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-sm btn-outline-primary">-</button>
                        <button type="button" className="">Update Balance</button>
                        <button type="button" className="btn btn-sm btn-outline-primary">+</button>
                    </div>
                </div>
            </div>
            }
        </div>
    )
    
}
