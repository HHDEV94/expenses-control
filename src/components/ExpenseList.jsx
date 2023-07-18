import Expense from './Expense'

/* eslint-disable react/prop-types */
const ExpenseList = ({
  expenses,
  filter,
  setEditExpense,
  handleDeleteExpense,
  expensesFiltered
}) => {
  if (filter) {
    return (
      <div className='expense-list container'>
        <h2 className='text-center'>
          {expensesFiltered.length ? `${filter} List` : `No expenses in ${filter} Category!`}
        </h2>

        {expensesFiltered.map(expense => (
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
