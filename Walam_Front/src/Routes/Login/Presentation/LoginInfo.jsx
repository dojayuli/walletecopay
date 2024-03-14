import { Link, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { FormButton, FormInput, PasswordInput } from '../../../components'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import axios from 'axios'

const LoginInfo = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async (values) => {
    const { username, password } = values
    try {
      const response = await axios.post('https://s13-21-ft-java.onrender.com/auth/login', { username, password })
      // Guarda el token de autenticación en localStorage o Redux según tu preferencia
      window.localStorage.setItem('token', response.data.token)
      window.localStorage.setItem('username', username)
      navigate('/DashboardUser')
      console.log(response)
    } catch (error) {
      console.error('Error al autenticar al usuario:', error)
      setError('Correo electrónico o contraseña incorrectos')
    }
  }

  const validationSchema = Yup.object().shape({
    // Definir la validación del esquema Yup para los campos del formulario
    username: Yup.string().required('El correo es requerido'),
    password: Yup.string().max(12, 'La contraseña debe tener máximo 12 caracteres')
      .matches(
        /^(?=.*[a-z])/,
        'Debe contener al menos una letra en minúscula'
      )
      .matches(
        /^(?=.*[A-Z])/,
        'Debe contener al menos una letra en mayúscula'
      )
      .matches(
        /^(?=.*[0-9])/,
        'Debe contener al menos un número'
      )
      .matches(
        /^(?=.*[!@#/$%/^&/*])/,
        'Debe contener al menos un caracter especial'
      )
      .required('La contraseña es requerida')
  })

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword) // Hide or show the password
  }

  const initialValues = {
    // Define initial values on the form
    username: '',
    password: ''
  }

  return (
    <div className='relative w-4/5 sm:w-2/3 md:w-3/5 lg:max-w-[520px]'>
      <div className='absolute inset-0 rounded-xl bg-loginColor opacity-25' />
      <div className='relative z-10 rounded-xl py-8 px-10 lg:px-20 w-full text-white flex flex-col'>
        <div className='w-[87%] xl:w-full flex justify-between'>
          <Link to='/'><FaArrowLeft/></Link>
        </div>
        <main className=''>
          <div className='flex flex-col pt-4 xl:pt-0 pb-6'>
            <h3 className='font-medium'>Ingreso</h3>
            <h1 className='text-4xl w-7'>
              Bienvenido nuevamente
            </h1>
          </div>
          <Formik
            className=''
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ errors, values }) => (
              <Form className='rounded pt-6 h-[320px]'>
                {/* Form inputs */}
                <FormInput name='username' type='name' placeholder='Ingrese User Name' errors={errors} id='username' value={values.username} />
                <PasswordInput name='Contraseña' placeholder='Ingrese contraseña' id='password' value={values.password} showPassword={showPassword} togglePasswordVisibility={togglePasswordVisibility} />
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                  <Link className=' text-sm font-medium text-black-900 dark:text-black-300' to='/reset-password '>¿Olvidaste tu contraseña?</Link>
                </div>
                {/* Submit button */}
                <div className='flex flex-col justify-center pt-[270px] xl:pt-[180px]'>
                  <FormButton text='Iniciar Sesión' />
                  {error && <p className='text-red-600 text-xs italic text-center'>{error}</p>}
                </div>
              </Form>
            )}
          </Formik>
          <div className='flex flex-col justify-center pt-[270px] xl:pt-[180px]'>
            <Link to='/Register' className='text-center pt-3 hover:text-lime-400'> Registrarse</Link>
          </div>
        </main>
      </div>
    </div>
  )
}

export default LoginInfo
