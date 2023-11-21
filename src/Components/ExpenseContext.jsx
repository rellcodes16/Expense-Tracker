import { createContext, useContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { useLocalStorageState } from "./useLocalStorageState"

const ExpenseContext = createContext()

function ExpenseProvider({ children }){
  const [cards, setCards] = useLocalStorageState([], 'transactions')
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
    // console.log(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(Number(e.target.value))
    // console.log(Number(e.target.value))
  }

  const handleCards = (card) => {
    setCards((cards) => [...cards, card])
    // console.log('hey')
  }

  const handleDelete = (id) => {
    setCards((cards) =>  cards.filter(card => card.id !== id))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!name || !amount) return;

    const newTrans = { id: uuidv4(), name, amount }
    console.log(newTrans)
    handleCards(newTrans)

    setName('')
    setAmount('')
  }

  const FormatAmount = (amount) =>{
    let x = amount.toFixed(2).split('.')
    return(
      '#' + x[0].split('').reverse().reduce(function(acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') + '.' + x[1]
    )
  }

  const FormatBalance = (amount) => {
    let x = amount.toFixed(2).split('.')
    return(
      '#' + (x[0].split('')[0]==='-'? '-' : '')+x[0].split('').reverse().reduce(function(acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') + '.' + x[1]
    )
  }


  const mappedCards = cards.map(card => card.amount)
  // console.log(mappedCards)

  const totalExpense = mappedCards.filter(item => item < 0).reduce((total, item) => (total += item), 0)

  const totalIncome = mappedCards.filter(item => item > 0).reduce((total, item) => (total += item), 0)

  const balance = mappedCards.reduce((total, item) => (total += item), 0)

  return(
    <ExpenseContext.Provider value={{
        cards,
        name,
        amount,
        balance,
        onAddCard: handleCards,
        onDeleteCards: handleDelete,
        onAddName: handleName,
        onAddAmount: handleAmount,
        totalIncome,
        totalExpense, 
        FormatAmount,
        FormatBalance,
        handleSubmit, 
    }}>
      {children}
    </ExpenseContext.Provider>
  )
}

function useExpense(){
    const context = useContext(ExpenseContext)
    if(context === undefined) throw new Error('ExpenseContext was used outside of the Expense Provider')
    return context;
}

export { ExpenseProvider, useExpense }