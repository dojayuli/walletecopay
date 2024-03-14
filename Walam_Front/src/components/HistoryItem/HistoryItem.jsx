import { Link } from 'react-router-dom'
import { IoEllipsisVerticalCircleOutline } from 'react-icons/io5'
import { BsArrowDownSquareFill, BsArrowUpSquareFill } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function HistoryItem ({ searchTerm }) {
  const [transactions, setTransactions] = useState()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = window.localStorage.getItem('token')
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const response = await axios.get('https://s13-21-ft-java.onrender.com/api/v1/users')
        setTransactions(response.data.account.transactions)
      } catch (error) {
        console.error('Error al guardar usuario:', error)
      }
    }

    fetchUser()
  }, [])

  if (!transactions) {
    return <div className='text-lg p-2'>Cargando información...</div>
  }

  const filteredTransactions = transactions.filter(transaction =>
    (transaction.type.toLowerCase().includes(searchTerm) ||
    (transaction.type === 'DEPOSIT' && 'Depósito Realizado'.toLowerCase().includes(searchTerm)) ||
    (transaction.type === 'WITHDRAW' && 'Retiro/Transferencia Realizada'.toLowerCase().includes(searchTerm)))
  )

  return (
    <div className='flex flex-col w-full py-2'>
      {filteredTransactions.map((transaction) => (
        <div key={transaction.id} className='flex justify-between items-center w-[360px] xl:w-[100%]'>
          <div className='flex items-center gap-2 w-[60%]'>
            <Link to={`/HistoryDetails/${transaction.id}`}><IoEllipsisVerticalCircleOutline className='text-lg' /></Link>
            {transaction.type === 'DEPOSIT' && 'Deposito Realizado'}
            {transaction.type === 'WITHDRAW' && 'Retiro/Transferencia Realizada'}

          </div>
          <div>{transaction.type === 'DEPOSIT' ? <BsArrowUpSquareFill className='text-green-500' /> : <BsArrowDownSquareFill className='text-red-500' />}</div>
          <div className='flex item-center justify-end pr-3 w-[24%] gap-12'>
            <p className={`${transaction.type === 'DEPOSIT' ? 'text-green-500' : 'text-red-500'}`}>$ {transaction.amount},00</p>
          </div>
        </div>
      ))}
      <hr />
    </div>
  )
}
