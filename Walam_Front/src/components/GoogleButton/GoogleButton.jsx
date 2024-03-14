import { FcGoogle } from 'react-icons/fc'
import { app } from '../../firebase/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider)
  } catch (error) {
    console.error(error)
  }
}

export default function GoogleButton () {
  return (
    <div className='flex flex-col gap-2 text-sm'>
      <button className='bg-black border-lime-400 flex justify-center rounded-lg items-center item-center border shadow font-bold py-4 px-4' onClick={signInWithGoogle}>
        <FcGoogle className='text-[1.2rem]' />
        <span className='text-center w-9/12 font-roboto'>Continuar con Google</span>
      </button>
    </div>
  )
}
