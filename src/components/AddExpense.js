import React, { useState } from 'react';
import axios from 'axios';

function AddExpense({ onAdd }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    const addExpense = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/add-expense', { title, amount });
            onAdd(); // Callback to refresh expense list in parent component
            setTitle('');
            setAmount('');
        } catch (error) {
            console.error('Error adding expense:', error);
        }
    };

    return (
        <form onSubmit={addExpense}>
            <h2>Add Expense</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default AddExpense;
