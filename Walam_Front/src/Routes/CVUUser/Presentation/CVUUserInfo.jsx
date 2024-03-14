import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function CVUUserInfo () {
  const [user, setUser] = useState()
  const [user2, setUser2] = useState()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = window.localStorage.getItem('token')
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const response = await axios.get('https://s13-21-ft-java.onrender.com/api/v1/users')
        setUser(response.data.account.cvu)
        setUser2(response.data.alias)
        console.log(response.data)
      } catch (error) {
        console.error('Error al guardar usuario:', error)
      }
    }

    fetchUser()
  }, [])

  return (
    <div className='flex flex-col px-8'>
      <div className='flex items-center gap-3 pl-4 xl:pl-0'>
        <Link to='/DashboardUser' className='mt-[-30px]'> <FaArrowLeft /></Link>
        <h1 className='font-bold text-2xl'>
          CVU y Alias
          <br />
          de Usuario
        </h1>
      </div>
      <div className='flex flex-col px-8 '>
        <div className='shadow-inner rounded-2xl mt-6 p-6 flex flex-col items-center border-2 xl:border xl:rounded-xl bg-zinc-800 xl:shadow-md xl:outline-1 xl:border-neutral-700 '>
          <h2 className='font-bold pb-3 text-xl'>CVU</h2>
          <hr className='border-1 w-[300px]' />
          <p className='py-3'>{user} </p>
          <hr className='border-1 w-[300px]' />
          <div />
          <h2 className='font-bold pb-3 pt-4 text-xl'>Alias</h2>
          <hr className=' pt-3 border-1 w-[300px]' />
          <p>{user2}</p>
        </div>
      </div>
    </div>
  )
}
