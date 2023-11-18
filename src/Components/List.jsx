import { v4 as uuidv4 } from 'uuid'
import { useExpense } from './ExpenseContext'

const List = () => {
    const { cards, onDeleteCards, FormatAmount } = useExpense()
  return (
    <div>
        <h3>List</h3>
        <div className='lists' >
            {
                cards.map(card => (
                    <div className={`list ${card.amount < 0 ? 'negative' : 'positive'}`} key={card.id}>
                        <h3>{card.name}</h3>
                        <div className='list-end'>
                            <p>{FormatAmount(card.amount)}</p>
                            <span><button onClick={() => onDeleteCards(card.id)}>❌</button></span>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default List