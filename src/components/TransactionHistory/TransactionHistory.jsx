import React from 'react';
import './TransactionHistory.css';

const TransactionHistory = ({ items }) => {
    return (
        <table>
            <thead className="bold">
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
            </thead>
            <tbody>
            {items.map((transaction, index) => (
                <tr key={transaction.id} className={`fadeIn fadeIn-${index + 1}`}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default TransactionHistory;
