/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { formaterCurrency } from '../utilities/utilities.js'

const BudgetControl = ({ expenses, budget }) => {
  const [available, setAvailable] = useState(0)
  const [spent, setSpent] = useState(0)

  useEffect(() => {
    const totalSpent = expenses.reduce((acc, expense) => expense.amount + acc, 0)
    const totalAvailable = budget - totalSpent

    setAvailable(totalAvailable)
    setSpent(totalSpent)
  }, [expenses, budget])

  return (
    <div className='budget-container container shadow two-columns'>
      <div>Graphic Here!</div>
      <div className='budget-content'>
        <p>
          <span>Budget: </span> {formaterCurrency(budget)}
        </p>
        <p>
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
