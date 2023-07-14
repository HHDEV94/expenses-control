/* eslint-disable react/prop-types */
import BudgetControl from './BudgetControl'
import NewBudget from './NewBudget'

const Header = ({ expenses, budget, isValidBudget, setBudget, setIsValidBudget }) => {
  return (
    <header>
      <h1>Expenses Planner</h1>

      {isValidBudget ? (
        <BudgetControl expenses={expenses} budget={budget} />
      ) : (
        <NewBudget budget={budget} setBudget={setBudget} setIsValidBudget={setIsValidBudget} />
      )}
    </header>
  )
}

export default Header
