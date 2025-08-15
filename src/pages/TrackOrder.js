import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrderTracker from '../components/OrderTracker';

const TrackOrder = () => {
    return (
        <>
            <Header />
            <section className='pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'></div>
                        <div className='col-md-6'>
                           
                            <div className='card border-0 shadow'>
                                <div className='card-body'>
                                    <h3 className='fw-bold text-center'>Track Your Order</h3>
                                    <hr />
                                    <OrderTracker />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'></div>


                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default TrackOrder;










