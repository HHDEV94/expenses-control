import { useEffect, useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ExpenseList from './components/ExpenseList'
import Filter from './components/FIlter'

import NewBudgetIcon from './img/new_expense.svg'
import { idGenerator } from './utilities/utilities'

function App() {
  const [expenses, setExpenses] = useState(() => {
    const expensesLS = localStorage.getItem('expenses')
    return expensesLS ? JSON.parse(expensesLS) : []
  })
  const [budget, setBudget] = useState(JSON.parse(localStorage.getItem('budget')) ?? 0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [editExpense, setEditExpense] = useState({})
  const [filter, setFilter] = useState('')
  const [expensesFiltered, setExpensesFiltered] = useState([])

  useEffect(() => {
    localStorage.setItem('budget', budget)
  }, [budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  useEffect(() => {
    if (filter) {
      const filteredExpenses = expenses.filter(expense => expense.category === filter)
      setExpensesFiltered(filteredExpenses)
    }
  }, [filter])

  useEffect(() => {
    const budgetLS = JSON.parse(localStorage.getItem('budget'))

    if (Number(budgetLS) > 0) {
      setIsValidBudget(true)
    }
  }, [])

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setModal(true)

      setTimeout(() => {
        setAnimateModal(true)
      }, 400)
    }
  }, [editExpense])

  const handleNewExpense = () => {
    setModal(true)
    setEditExpense({})

    setTimeout(() => {
      setAnimateModal(true)
    }, 400)
  }

  const handleSaveExpense = expense => {
    if (expense.id) {
      const updatedExpenses = expenses.map(exp => (exp.id === expense.id ? expense : exp))
      setExpenses(updatedExpenses)
      setEditExpense({})
    } else {
      expense.id = idGenerator()
      setExpenses([...expenses, expense])
    }
  }

  const handleDeleteExpense = id => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id)

    setExpenses(updatedExpenses)
  }

  return (
    <div className={modal ? 'sticky' : ''}>
      <Header
        expenses={expenses}
        budget={budget}
        isValidBudget={isValidBudget}
        setExpenses={setExpenses}
        setBudget={setBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <Filter filter={filter} setFilter={setFilter} />
            <ExpenseList
              expenses={expenses}
              filter={filter}
              setEditExpense={setEditExpense}
              handleDeleteExpense={handleDeleteExpense}
              expensesFiltered={expensesFiltered}
            />
          </main>

          <div className='new-budget-icon'>
            <img src={NewBudgetIcon} alt='NewBudgetIcon' onClick={handleNewExpense} />
          </div>
        </>
      )}

      {modal && (
        <Modal
          editExpense={editExpense}
          animateModal={animateModal}
          setModal={setModal}
          setAnimateModal={setAnimateModal}
          handleSaveExpense={handleSaveExpense}
        />
      )}
    </div>
  )
}

export default App
