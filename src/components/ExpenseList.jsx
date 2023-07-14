import Expense from './Expense'

/* eslint-disable react/prop-types */
const ExpenseList = ({ expenses, setEditExpense, handleDeleteExpense }) => {
  return (
    <div className='expense-list container'>
      <h2 className='text-center'>
        {expenses.length ? 'Expense List' : 'There are nothing expenses'}
      </h2>

      {expenses.map(expense => (
        <Expense
          key={expense.id}
          expense={expense}
          setEditExpense={setEditExpense}
          handleDeleteExpense={handleDeleteExpense}
        />
      ))}
    </div>
  )
}

export default ExpenseList
