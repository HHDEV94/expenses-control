/* eslint-disable react/prop-types */
const Filter = ({ filter, setFilter }) => {
  return (
    <div className='filter shadow container'>
      <form>
        <div className='form-field'>
          <label>Filter Expenses</label>
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value=''>-- Select Category --</option>
            <option value='saveMoney'>Save Money</option>
            <option value='food'>Food</option>
            <option value='home'>Home</option>
            <option value='expenses'>Expenses</option>
            <option value='freeTime'>Free Time</option>
            <option value='health'>Health</option>
            <option value='subscriptions'>Subscriptions</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filter
