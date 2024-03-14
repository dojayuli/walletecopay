import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { BsQrCode } from 'react-icons/bs'

const ForgotPassword = () => {
  return (
    <div>
      <h1 className='text-white text-2xl font-medium pb-2 hidden xl:block'>EcoPay</h1>
      <div className='max-w-[400px] xl:max-w-[496px] xl:rounded-xl xl:bg-white p-4'>
        <div className='w-[87%] flex justify-between'>
          <Link to='/login'><FaArrowLeft /></Link>
          <div>
            <BsQrCode className='text-[36px] hidden' />
          </div>
        </div>
        <main>
          <div className='flex flex-col pt-4 pb-6'>
            <h3 className='font-medium'>Recuperar</h3>
            <h1 className='text-4xl w-7'>
              Contraseña
            </h1>
          </div>
          <div className='flex flex-col '>
            <div className='flex flex-col pb-4'>
              <label htmlFor='email'>Correo Electrónico</label>
              <input className='shadow appearance-none border rounded w-full py-3 px-3 leading-tight text-[0.8rem] lg:text-[1rem] focus:outline-none focus:shadow-outline text-gray-70' type='email' name='email' id='email' placeholder='ejemplo@gmail.com' />
            </div>
          </div>
        </main>
        <div className='flex flex-col justify-center pt-[270px] xl:pt-[200px]'>
          <button className=' font-bold  py-2 px-32 rounded  border-2 border-black shadow'>Recuperar Contraseña</button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
