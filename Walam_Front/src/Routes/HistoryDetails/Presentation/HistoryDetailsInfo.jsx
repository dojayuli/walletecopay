import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function HistoryDetailsInfo ({ transactions }) {
  const { id } = useParams()
  const [transaction, setTransaction] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realizar la petición para obtener la información de la transacción
        const response = await axios.get(`https://s13-21-ft-java.onrender.com/api/v1/transaction/${id}`)
        setTransaction(response.data)
        console.log(response)
      } catch (error) {
        console.error('Error al obtener la información:', error)
      }
    }

    fetchData()
  }, [id])

  let formattedDate = ''
  if (transaction) {
    const date = new Date(transaction.date)
    formattedDate = date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })
  }
  return (
    <div className='flex flex-col px-8'>
      <div className='flex items-center gap-3'>
        <Link to='/MovementsHistory' className='mt-[-30px]'><FaArrowLeft /></Link>
        <h1 className='font-bold text-2xl'>
          Detalles del
          <br />
          movimiento
        </h1>
      </div>
      {transaction && (
        <div className='flex flex-col px-8'>
          <div className='shadow-inner rounded-2xl mt-6 p-6 flex flex-col items-center border-2  xl:border xl:rounded-xl bg-zinc-800 xl:shadow-md outline-1 border-neutral-700'>
            <h2 className='font-medium pb-3'>
              {transaction.type === 'DEPOSIT'
                ? 'Depósito'
                : transaction.type === 'WITHDRAW'
                  ? 'Extracción'
                  : 'Transferencia'}
            </h2>
            <hr className='border-1 w-[300px]' />
            <hr className='border-1 w-[300px]' />
            <div />
            <p className='font-bold text-3xl py-4'>${transaction.amount},00</p>
            <hr className=' pt-3 border-1 w-[300px]' />
            <p>{formattedDate}</p>
          </div>
        </div>
      )}
    </div>
  )
}
