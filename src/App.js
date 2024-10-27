import React, { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';

function App() {
  const [expensesUpdated, setExpensesUpdated] = useState(false);

  const handleAddExpense = () => {
    setExpensesUpdated(!expensesUpdated); // Trigger expense list refresh
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <AddExpense onAdd={handleAddExpense} />
      <ExpenseList />
    </div>
  );
}

export default App;
