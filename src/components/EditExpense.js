import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditExpense({ expenseId, onUpdate }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        fetchExpense();
    }, []);

    const fetchExpense = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/expenses/${expenseId}`);
            setTitle(response.data.title);
            setAmount(response.data.amount);
        } catch (error) {
            console.error('Error fetching expense:', error);
        }
    };

    const updateExpense = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/expenses/${expenseId}`, { title, amount });
            onUpdate(); // Callback to refresh expense list in parent component
        } catch (error) {
            console.error('Error updating expense:', error);
        }
    };

    return (
        <form onSubmit={updateExpense}>
            <h2>Edit Expense</h2>
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
            <button type="submit">Update Expense</button>
        </form>
    );
}

export default EditExpense;
