import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes <HTMLInputElement> {}

export function Input(props: InputProps) {

  return (

    <input
      {...props}
      className='bg-zinc-800 mt-2 py-2 px-2 rounded text-sm placeholder:text-zinc-400'/>  

  )

}