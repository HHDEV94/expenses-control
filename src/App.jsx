import { useEffect, useState } from 'react'
import Header from './components/Header'
import NewBudgetIcon from './img/new_expense.svg'
import Modal from './components/Modal'
import ExpenseList from './components/ExpenseList'

function App() {
  const [expenses, setExpenses] = useState([])
  const [budget, setBudget] = useState('')
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [editExpense, setEditExpense] = useState({})

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
    setExpenses([...expenses, expense])
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
        setBudget={setBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <ExpenseList
              expenses={expenses}
              setEditExpense={setEditExpense}
              handleDeleteExpense={handleDeleteExpense}
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
