import { Link } from 'react-router-dom'

export default function LinkMenu () {
  return (
    <ul className='mt-2 text-black xl:text-white'>
      <li className='mb-1'>
        <Link to='/DashboardUser' className='block px-4 py-2 text-sm hover:border-l-gray'>Inicio</Link>
        <hr className='xl:border-neutral-700' />
      </li>
      <li className='mb-1'>
        <Link to='/CVUUser' className='block px-4 py-2 text-sm'>CVU del usuario</Link>
        <hr className='xl:border-neutral-700' />
      </li>
      <li className='mb-1'>
        <Link to='/VirtualCashier?action=deposit' className='block px-4 py-2 text-sm'>
          Depositar
        </Link>
        <hr className='xl:border-neutral-700' />
      </li>
      <li className='mb-1'>
        <Link to='/Transfer' className='block px-4 py-2 text-sm'>
          Transferir
        </Link>
        <hr className='xl:border-neutral-700' />
      </li>
      <li className='mb-1'>
        <Link to='/VirtualCashier?action=withdraw' className='block px-4 py-2 text-sm'>Extraer</Link>
        <hr className='xl:border-neutral-700' />
      </li>
      <li className='mb-1'>
        <Link to='/MovementsHistory' className='block px-4 py-2 text-sm'>Historial de movimientos</Link>
        <hr className='xl:border-neutral-700' />
      </li>
      <li className='mb-1'>
        <Link to='/VirtualCard' className='block px-4 py-2 text-sm'>Tarjeta virtual</Link>
        <hr className='xl:border-neutral-700' />
      </li>
      <li className='mb-1'>
        <Link to='/ForeignExchange' className='block px-4 py-2 text-sm'>Divisas</Link>
        <hr className='xl:border-neutral-700' />
      </li>
      <li className='mb-1'>
        <Link to='#' className='block px-4 py-2 text-sm'>QR</Link>
        <hr className='xl:border-neutral-700' />
      </li>
      <li className='mb-1'>
        <Link to='/Donate' className='block px-4 py-2 text-sm'>Donación</Link>
        <hr className='xl:border-neutral-700' />
      </li>
      <li className='mb-1'>
        <Link to='/Help' className='block px-4 py-2 text-sm'>Preguntas frecuentes</Link>
        <hr className='xl:border-neutral-700' />
      </li>
      <li className='mb-1'>
        <Link to='/' className='block px-4 py-2 text-sm'>Cerrar sesión</Link>
        <hr className='xl:border-neutral-700 hidden xl:block' />
      </li>
    </ul>
  )
}
