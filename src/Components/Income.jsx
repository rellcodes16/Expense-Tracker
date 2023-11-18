import React from 'react'
import { useExpense } from './ExpenseContext'

const Income = () => {
  const { FormatAmount, totalIncome } = useExpense()


  return (
    <div className='income'>
        <h3>INCOME</h3>
        <h3 >{FormatAmount(Number(totalIncome))}</h3>
    </div>
  )
}

export default Income