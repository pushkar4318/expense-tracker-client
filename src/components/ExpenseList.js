import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ExpenseList() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
        try {
            const response = await axios.get('http://localhost:5000/expenses');
            setExpenses(response.data);
        } catch (error) {
            console.error('Error fetching expenses:', error);
        }
    };

    const deleteExpense = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/expenses/${id}`);
            fetchExpenses(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting expense:', error);
        }
    };

    return (
        <div>
            <h2>Expense List</h2>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense._id}>
                        {expense.title} - ${expense.amount}
                        <button onClick={() => deleteExpense(expense._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExpenseList;
