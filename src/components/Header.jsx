/* eslint-disable react/prop-types */
import BudgetControl from './BudgetControl'
import NewBudget from './NewBudget'

const Header = ({ expenses, budget, isValidBudget, setExpenses, setBudget, setIsValidBudget }) => {
  return (
    <header>
      <h1>Expenses Planner</h1>

      {isValidBudget ? (
        <BudgetControl
          expenses={expenses}
          budget={budget}
          setExpenses={setExpenses}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      ) : (
        <NewBudget budget={budget} setBudget={setBudget} setIsValidBudget={setIsValidBudget} />
      )}
    </header>
  )
}

export default Header
