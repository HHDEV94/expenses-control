/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { formaterCurrency } from '../utilities/utilities.js'

const BudgetControl = ({ expenses, budget, setExpenses, setBudget, setIsValidBudget }) => {
  const [available, setAvailable] = useState(0)
  const [spent, setSpent] = useState(0)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const totalSpent = expenses.reduce((acc, expense) => expense.amount + acc, 0)
    const totalAvailable = budget - totalSpent

    const newPercentage = (totalSpent / budget) * 100

    setTimeout(() => {
      setPercentage(newPercentage.toFixed(2))
    }, 900)

    setAvailable(totalAvailable)
    setSpent(totalSpent)
  }, [expenses, budget])

  const handleResetApp = () => {
    const confirmReset = confirm('Are you sure? The entire expense list will be deleted.')

    if (confirmReset) {
      setExpenses([])
      setBudget(0)
      setIsValidBudget(false)
    }
  }

  return (
    <div className='budget-container container shadow two-columns'>
      <div>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}% Spent`}
          styles={buildStyles({
            pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: percentage > 100 ? '#DC2626' : '#3B82F6'
          })}
        />
      </div>
      <div className='budget-content'>
        <button className='reset-app' type='button' onClick={handleResetApp}>
          Reset App
        </button>
        <p>
          <span>Budget: </span> {formaterCurrency(budget)}
        </p>
        <p className={`${available < 0 ? 'negative' : ''}`}>
          <span>Available: </span> {formaterCurrency(available)}
        </p>
        <p>
          <span>spent: </span> {formaterCurrency(spent)}
        </p>
      </div>
    </div>
  )
}

export default BudgetControl
