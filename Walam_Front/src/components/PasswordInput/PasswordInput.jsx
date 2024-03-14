import { Field, ErrorMessage } from 'formik'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function PasswordInput ({ id, name, showPassword, placeholder, errors, value, togglePasswordVisibility }) {
  const invalid = 'invalid:border-red-600 invalid:text-red-600 invalid:border-red-600 focus:invalid:ring-red-500'

  const normal = 'focus:outline-none text-white '

  return (
    <div className='mb-4 h-[90px]'>
      <div className='mb-4'>
        <label
          className='block text-white text-sm mb-2'
          htmlFor={id}
        >
          {name}
        </label>
        <div className='relative'>
          <Field
            className={` font-roboto shadow appearance-none border rounded w-full py-3 px-3 leading-tight text-[0.8rem] lg:text-[1rem] bg-[#434740] border-gray-800 ${errors ? invalid : normal}`}
            id={id}
            type={showPassword ? 'text' : 'password'}
            placeholder={placeholder}
            name={id}
            value={value || ''}
          />
          <span
            className='absolute right-5 text-neutral-600 top-[50%] transform -translate-y-1/2 cursor-pointer'
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <ErrorMessage name={id} component='p' className='text-red-600 text-xs italic' />
      </div>
    </div>
  )
}
