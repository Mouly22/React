import React from 'react';
import './Status_delivery.css'; // Import your CSS file here

const OrderTracking = () => {
    const orderData = {
        date: '10 October 2018',
        orderId: '34234223423',
        productName: 'Potato',
        productPrice: 6000, // Changed to number for calculation
        shipping: 600, // Changed to number for calculation
        status: 'On the way' // Possible values: 'Ordered', 'Shipped', 'On the way', 'Delivered'
    };

    // Calculate total
    const total = orderData.productPrice + orderData.shipping;

    return (
        <div className="card">
            <div className="title">Purchase Reciept</div>
            <div className="info">
                <div className="row">
                    <div className="col-7">
                        <span className="heading">Date</span><br />
                        <span className="details">{orderData.date}</span>
                    </div>
                    <div className="col-5 pull-right">
                        <span className="heading">Order No.</span><br />
                        <span className="details">{orderData.orderId}</span>
                    </div>
                </div>      
            </div>      
            <div className="pricing">
                <div className="row">
                    <div className="col-9">
                        <span className="name">{orderData.productName}</span>  
                    </div>
                    <div className="col-3">
                        <span className="price">{orderData.productPrice} ৳</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <span className="name">Shipping</span>
                    </div>
                    <div className="col-3">
                        <span className="price">{orderData.shipping} ৳</span>
                    </div>
                </div>
            </div>
            <div className="total">
                <div className="row">
                    <div className="col-9"></div>
                    <div className="col-3"><big>{total} ৳</big></div>
                </div>
            </div>
            <div className="tracking">
                <div className="title">Tracking Order</div>
            </div>
            <div className="progress-track">
                <ul id="progressbar">
                    <li className={orderData.status === 'Ordered' || orderData.status === 'Shipped' || orderData.status === 'On the way' || orderData.status === 'Delivered' ? "step0 active" : "step0"} id="step1">Ordered</li>
                    <li className={orderData.status === 'Shipped' || orderData.status === 'On the way' || orderData.status === 'Delivered' ? "step0 active text-center" : "step0 text-center"} id="step2">Shipped</li>
                    <li className={orderData.status === 'On the way' || orderData.status === 'Delivered' ? "step0 active text-right" : "step0 text-right"} id="step3">On the way</li>
                    <li className={orderData.status === 'Delivered' ? "step0 active text-right" : "step0 text-right"} id="step4">Delivered</li>
                </ul>
            </div>
        </div>
    );
};

export default OrderTracking;
