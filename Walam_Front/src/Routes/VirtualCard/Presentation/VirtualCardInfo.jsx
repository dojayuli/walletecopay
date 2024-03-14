import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import axios from 'axios'

const VirtualCardInfo = () => {
  const [userCard, setUserCard] = useState()
  const [loading, setLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = window.localStorage.getItem('token')
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const response = await axios.get('https://s13-21-ft-java.onrender.com/api/v1/users')
        setUserCard(response.data.card)
        setLoading(false)
        console.log(response.data)
      } catch (error) {
        console.error('Error al guardar usuario:', error)
      }
    }

    fetchUser()
  }, [])

  if (loading) {
    return <div className='p-5 text-xl pt-4'>Cargando información...</div>
  }

  return (
    <div className='w-full px-8 flex flex-col'>
      <div className='flex items-center gap-3 self-start py-8 '>
        <Link to='/DashBoardUser'> <FaArrowLeft /></Link>
        <h1 className='font-bold text-2xl'>
          Tarjeta Virtual
        </h1>
      </div>

      <div>
        <section id='card' className='w-full py-2 flex flex-col items-center text-neutral-900 font-semibold'>
          <div className='bg-OnBoarding-bgImage bg-OnBoarding-bgPosition bg-no-repeat w-[380px] pb-3' style={{ backgroundImage: 'url("/img/Card.png")', backgroundSize: '100%' }}>
            <div className='px-5 pt-[85px] pb-2'>
              {isVisible
                ? <div>
                  <div className=''>
                    <p className='text-sm'>Numero de tarjeta</p>
                    <p className='text-lg'>{userCard.cardNumber}</p>
                  </div>
                  <div className='flex justify-between py-2'>
                    <div>
                      <p className='text-sm'>Fecha de expiración</p>
                      <p className='text-lg'>{userCard.expirationDate}</p>
                    </div>
                    <div>
                      <p className='text-sm'>Código de seguridad CVV</p>
                      <p className='text-lg'>{userCard.cvv}</p>
                    </div>
                  </div>
                  <div>
                    <p className='text-xl mb-3'>{userCard.cardHolder}</p>
                  </div>
                  </div>
                : <div>
                  <div className=''>
                    <p className='text-sm'>Numero de tarjeta</p>
                    <p className='text-lg'>**************</p>
                  </div>
                  <div className='flex justify-between py-2'>
                    <div>
                      <p className='text-sm'>Fecha de expiración</p>
                      <p className='text-lg'>****-**-**</p>
                    </div>
                    <div>
                      <p className='text-sm'>Código de seguridad CVV</p>
                      <p className='text-lg'>***</p>
                    </div>
                  </div>
                  <div>
                    <p className='text-xl mb-3'>****** ******</p>
                  </div>
                  </div>}

            </div>
          </div>
          <button onClick={toggleVisibility} className='border border-black h-[46px] w-[350px] px-3 rounded-xl bg-neutral-900 text-white font-normal'> Ver Datos</button>
        </section>
      </div>
    </div>
  )
}

export default VirtualCardInfo
