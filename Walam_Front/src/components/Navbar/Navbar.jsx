import { useState } from 'react'
import LinkMenu from './LinkMenu'
import { FaCircleQuestion } from 'react-icons/fa6'
import { FaBell } from 'react-icons/fa'
import { MdMenu } from 'react-icons/md'
import whiteIcon from '../../assets/icon_white.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenNotes, setIsOpenNotes] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    isOpenNotes ? setIsOpenNotes(false) : setIsOpenNotes(isOpenNotes)
  }

  const toggleNotices = () => {
    setIsOpenNotes(!isOpenNotes)
    isOpen ? setIsOpen(false) : setIsOpen(isOpen)
  }

  return (
    <nav className='pt-4 pb-2 xl:pt-0 xl:pb-0 w-screen xl:w-full flex justify-between px-4 xl:pl-4 bg-loginColor xl:bg-transparent text-white shadow-lg xl:shadow-none'>
      <Link to='/Help' className='flex items-center gap-2 xl:hidden'>
        <FaCircleQuestion />
        <p>Ayuda</p>
      </Link>
      <div className='flex gap-1 items-center xl:hidden'>
        <img src={whiteIcon} alt='logo blanco' className='w-[20px] h-[20px]' />
        <p>EcoPay</p>
      </div>
      <div className='flex gap-1 items-center xl:hidden'>
        <img src={whiteIcon} alt='logo blanco' className='w-[20px] h-[20px]' />
        <p>EcoPay</p>
      </div>
      <div className='flex items-center gap-4'>
        <button onClick={toggleNotices} className='xl:hidden'>
          <FaBell className='' />
        </button>
        {isOpenNotes && (
          <div className=' absolute top-10 right-0 bg-white border p-2'>
            <p className='block px-4 py-2 text-sm text-black'>No hay nuevos avisos</p>
          </div>
        )}
        <button onClick={toggleMenu} className='xl:hidden'>
          <MdMenu className='text-[24px]' />
        </button>
        {isOpen && (
          <div className='absolute top-10 right-0 bg-white border' onClick={toggleMenu}>
            {/* menu mobile */}
            <LinkMenu />
          </div>
        )}
        <div className='hidden xl:flex xl:border xl:rounded-xl text-white border-neutral-700 h-[720px] justify-start'>
          {/* menu desktop */}
          <LinkMenu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
