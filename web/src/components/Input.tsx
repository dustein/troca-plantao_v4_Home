import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes <HTMLInputElement> {}

export function Input(props: InputProps) {

  return (

    <input
      {...props}
      id="usermail"
      placeholder='seu email'
      className='bg-zinc-800 py-3 px-4 rounded text-sm placeholder:text-zinc-400'/>  

  )

}