/* eslint-disable react/prop-types */
export default function FormButton (props) {
  return (
    <input
      type='submit'
      disabled={props.disabled || false}
      className='bg-black border-lime-400 disabled:bg-gray-400 cursor-pointer text-sm text-white border font-semibold mt-3 py-4 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full hover:outline hover:text-lime-400'
      value={props.text}
    />
  )
}
