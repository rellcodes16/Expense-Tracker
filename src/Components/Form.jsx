import { useExpense } from './ExpenseContext'

const Form = () => {
  const { onAddAmount, onAddName, handleSubmit, amount, name } = useExpense()

  const handleSpaceBar = (e) => {
    if(e.key === ' '){
      e.preventDefault();
    }
  }
  
  return (
    <div className='form'>
    <h3>Add Expense</h3>
    <form onSubmit={handleSubmit}>
        <label htmlFor='listName'>List Name</label><br/>
        <input type='text' value={name} onChange={onAddName} onKeyDown={handleSpaceBar}/><br/>
        <label htmlFor='amount'>Amount <span>(Add the negative sign (-) to indicate an expense)</span></label><br/>
        <input type='number' value={amount} onChange={onAddAmount} onKeyDown={handleSpaceBar}/><br/>
        <button type='submit'>+ Add To List </button>
    </form>
    </div>
  )
}

export default Form