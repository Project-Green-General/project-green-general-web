import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

function Order() {
    return (
        <div calssName="content content-margined">
            <div className='order-header'>
                <h3>Orders</h3>
            </div>
            <div className="order-list">
                <table calssName="table">
                    <thread>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>USER</th>
                            <th>PAID</th>
                            <th>PAID AT</th>
                            <th>DELIVERED</th>
                            <th>DELIVERED AT</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thread>

                </table>
            </div>
        </div>);
};

export default Orders;