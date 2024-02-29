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
                        <tbody>
                            {data.orders.map((order) => (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.createdAt}</td>
                                    <td>{order.totalPrice}</td>
                                    <td>{order.user.name}</td>
                                    <td>{order.isPaid}</td>
                                    <td>{order.paidAt}</td>
                                    <td>{order.isDelivered.toString()}</td>
                                    <td>{order.deliverableData}</td>
                                    <td>
                                        <Link to={"/order/" + order._id} className="nutton secondary">
                                            Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </thread>

                </table>
            </div>
        </div>);
};

export default Orders;