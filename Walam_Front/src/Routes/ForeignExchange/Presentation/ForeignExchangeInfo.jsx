import { DisplayDate, ForeignInfo } from '../../../components'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export default function ForeignExchangeInfo () {
  const dateString = '2024-03-07T16:52:00.000Z'

  const exchangeRate = [
    {
      moneda: 'USD',
      casa: 'oficial',
      nombre: 'Dólar',
      compra: 824.5,
      venta: 864.5,
      fechaActualizacion: '2024-03-06T16:52:00.000Z'
    },
    {
      moneda: 'EUR',
      casa: 'oficial',
      nombre: 'Euro',
      compra: 922.03,
      venta: 922.21,
      fechaActualizacion: '2024-03-06T16:52:00.000Z'
    },
    {
      moneda: 'BRL',
      casa: 'oficial',
      nombre: 'Real Brasileño',
      compra: 171.2,
      venta: 171.24,
      fechaActualizacion: '2024-03-06T16:52:00.000Z'
    },
    {
      moneda: 'CLP',
      casa: 'oficial',
      nombre: 'Peso Chileno',
      compra: 85.89,
      venta: 86.01,
      fechaActualizacion: '2024-03-06T16:52:00.000Z'
    },
    {
      moneda: 'UYU',
      casa: 'oficial',
      nombre: 'Peso Uruguayo',
      compra: 21.64,
      venta: 21.66,
      fechaActualizacion: '2024-03-06T16:52:00.000Z'
    }
  ]

  return (
    <div className='overflow-auto'>
      <div className='flex items-center gap-2 xl:gap-0 '>
        <Link to='/DashBoardUser' className='pl-4 self-start pt-2'>            <FaArrowLeft />
        </Link>
        <h2 className='text-center pb-3 font-bold text-2xl'>Tipo de cambio de moneda a pesos argentinos:</h2>
      </div>
      <DisplayDate dateString={dateString} />
      <div className='w-full flex flex-col items-center  '>
        {exchangeRate && exchangeRate.map((data, key) => {
          return <ForeignInfo moneda={data.moneda} venta={data.venta} compra={data.compra} key={key} />
        })}
      </div>
    </div>
  )
}
