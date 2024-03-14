import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosApps, IoIosCloseCircle, IoLogoLinkedin, IoLogoGithub, IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io'
import { FaGooglePlay, FaApple } from 'react-icons/fa'

const OnBoardingInfo = () => {
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const navList = (
    <ul className='mt-2 mb-4 flex flex-col text-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <li className='p-1 font-normal'>
        <a href='#servicios' className=''>Servicios</a>
      </li>
      <li className='p-1 font-normal'>
        <a href='#tarjeta' className=''>Tarjeta</a>
      </li>
      <li className='p-1 font-normal'>
        <a href='#prestamos' className=''>Prestamos sustentables</a>
      </li>
    </ul>
  )

  return (
    <div className='bg-[#222121] h-full w-full pt-[50px] lg:bg-OnBoarding-bgImage lg:bg-OnBoarding-bgPosition lg:bg-no-repeat scroll-smooth'>

      <header className='sticky top-0 h-[90px] shadow-md '>
        <nav className='z-10  max-w-full rounded-none px-8 py-[14px] backdrop-blur bg-[#1E1E1E99]'>
          <div className='h-[62px] flex items-center justify-between text-blue-gray-900'>
            <a href='#home' className='mr-4 ml-10 cursor-pointer py-1.5 '>
              <img src='/img/Logox2.png' alt='Logo EcoPay' width={200} />
            </a>
            <div className='flex items-center gap-4'>
              <div className='mr-4 hidden lg:block'>{navList}</div>
              <div className='flex items-center gap-x-2 text-center'>
                <Link to='/Register' className='text-base bg-black py-2 px-8 rounded-lg border-2 border-[#B2FA5B] shadow hidden lg:inline-block'> Registrarse</Link>
                <Link to='/Login' className='text-base bg-transparent py-2 px-8 rounded-lg border-2 border-white shadow hidden lg:inline-block'> Iniciar sesión</Link>
              </div>
              <button
                className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? <IoIosCloseCircle className='w-[25px] h-[25px]' /> : <IoIosApps className='w-[25px] h-[25px]' />}
              </button>
            </div>
          </div>
          <nav className={openNav ? 'flex flex-col items-center w-full h-[180px]' : 'hidden'}>
            {navList}
            <div className='flex items-center gap-x-2 text-center'>
              <Link to='/Register' className='text-sm bg-black py-2 px-8 rounded-lg border-2 border-[#B2FA5B] shadow'> Registrarse</Link>
              <Link to='/Login' className='text-sm bg-transparent py-2 px-8 rounded-lg border-2 border-white shadow'> Iniciar sesión</Link>
            </div>
          </nav>
        </nav>
      </header>

      <main className='w-full flex flex-col justify-center items-center'>

        <div id='home' className='h-[710px] pt-[150px] pb-[200px] px-[20px] lg:pl-[22%] flex flex-col text-center lg:text-left'>
          <p className='text-5xl'>La primer</p>
          <p className='py-3 text-8xl bg-gradient-to-r from-[#B2FA5B] to-[#3BC53F] inline-block text-transparent bg-clip-text'>Green FinTech</p>
          <p className='text-5xl'>de Latinoamérica</p>
        </div>

        <div id='servicios' className='lg:h-[850px] pb-[60px] pt-[150px] px-[20px] lg:pl-[60px] lg:pr-0 text-center bg-[#3E3E3Eb8] w-full border-b-2 border-black shadow-md'>
          <div className='w-full flex flex-col items-center lg:flex-row lg:justify-between'>
            <div className='w-[360px] lg:pr-[20px] text-left'>
              <p className='text-left text-4xl'>Servicios Latam</p>
              <h2 className='text-2xl pb-2 pt-8'>Envía Dinero</h2>
              <p>Fácil, rápida y segura que te permite enviar dinero a cualquier parte del continente sin importar si tiene o no una cuenta bancaria.</p>
              <h2 className='text-2xl pb-2 pt-8'>Transferencias</h2>
              <p>Realiza transferencias gratis y al instante: a contactos, cuentas bancarias o billeteras virtuales.</p>
              <h2 className='text-2xl pb-2 pt-8'>Extracciones</h2>
              <p>Sacá dinero con tu celular, con QR en comercios adheridos y con tu tarjeta prepaga en todos los cajeros del país.</p>
              <h2 className='text-2xl pb-2 pt-8'>Cambio de Divisas</h2>
              <p>"Viaja sin fronteras: cambia divisas al instante”</p>
            </div>
            <img src='/img/Group2.png' alt='Lugares de Latinoamérica' className='size-5/6 pt-10 lg:size-2/3' />
          </div>
        </div>

        <div id='tarjeta' className='py-[150px] px-[20px] w-full lg:h-[850px] text-right border-b-2 border-black shadow-md flex flex-col items-center lg:flex-row lg:justify-center'>
          <div className='w-[380px] lg:w-[480px] flex flex-col justify-around items-end py-2 pr-6'>
            <p className='text-4xl lg:text-6xl'>Solicita tu tarjeta Virtual sin Costo y sin Burocracias</p>
            <img src='/img/Top Estate Agent.png' alt='Usuarios EcoPay' className='w-[280px] pt-2' />
          </div>
          <img src='/img/Card.png' alt='Targeta EcoPay' className='w-[380px] lg:w-[480px] py-2 pl-2' />
        </div>

        <div id='prestamos' className='py-[150px] px-[20px] w-full lg:h-[850px] border-b-2 border-black shadow-md flex flex-wrap justify-center'>
          <div className='w-[320px] pr-[20px] py-2 flex flex-col justify-around items-end text-right'>
            <img src='/img/Blog.png' alt='Usuarios EcoPay' className='w-[100px] pb-3' />
            <img src='/img/Blog2.png' alt='Usuarios EcoPay' className='w-[260px]' />
          </div>
          <div className='w-[320px] pl-[20px] py-2 flex flex-col justify-around items-start text-left'>
            <img src='/img/Blog3.png' alt='Usuarios EcoPay' className='w-[300px]' />
            <p className='text-4xl w-[300px] pt-2'>Prestamos para emprendimientos sustentables</p>
          </div>
        </div>

      </main>

      <footer className='w-full flex flex-col items-center bg-black'>

        <div className='flex flex-col justify-evenly items-center py-10 w-[400px] '>
          <p className='text-xl'>Descargate la última versión de la app</p>
          <div className='flex flex-wrap justify-between items-center pt-4'>
            <div className='p-2'><Link to='/' className='text-base bg-transparent py-2 px-6 rounded-lg border-2 border-white shadow flex items-center'><FaGooglePlay className='inline-block w-[25px] h-[25px] pr-2' /> Google Play</Link></div>
            <div className='p-2'><Link to='/' className='text-base bg-[#1B1B1B9C] py-2 px-6 rounded-lg border-2 border-white shadow flex items-center'><FaApple className='inline-block w-[25px] h-[25px] pr-2' /> App Store</Link></div>
          </div>
        </div>

        <div className='w-full flex flex-col items-center lg:bg-OnBoardingFooter-bgImage lg:bg-OnBoardingFooter-bgPosition lg:bg-no-repeat'>
          <div className='flex flex-wrap justify-around w-full bg-[#3E3E3Eb8] shadow-md'>

            <div className='flex flex-col justify-center items-center pb-6'>
              <div className='flex flex-wrap justify-center' />
              <div className='flex flex-col justify-between items-center w-[400px] pt-4'>
                <p className='text-xl'>Contacto</p>
                <div className='w-full flex flex-wrap justify-around py-4'>
                  <IoLogoLinkedin className='w-[50px] h-[50px]' />
                  <IoLogoFacebook className='w-[50px] h-[50px]' />
                  <IoLogoInstagram className='w-[50px] h-[50px]' />
                  <IoLogoYoutube className='w-[50px] h-[50px]' />
                  <Link to='https://github.com/No-Country/s13-21-ft-java'><IoLogoGithub className='w-[50px] h-[50px]' /></Link>

                </div>
                <p className='text-xl'>Location: Latam</p>
              </div>
            </div>

          </div>

          <div className='p-4'>
            <p>* Copyright © 2023-2024 Grupo Java. Todos los derechos reservados. EcoPay.</p>
          </div>

        </div>

      </footer>

    </div>
  )
}

export default OnBoardingInfo
