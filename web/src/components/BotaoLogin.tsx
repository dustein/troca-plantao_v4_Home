import * as Dialog from '@radix-ui/react-dialog'
import { Input } from './Input';
import { CheckCircle, XCircle } from 'phosphor-react'

export function BotaoLogin() {

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <button className='text-center flex items-center justify-center border  p-3 m-auto border-zinc-500 text-gray-100 hover:bg-zinc-200 hover:text-gray-800'>Login</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
          <Dialog.Content className='fixed bg-slate-700 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25'>
            <Dialog.Title className='text-xl font-black text-center'>Login</Dialog.Title>

            <form className='mt-6 flex flex-col gap-2'>
              
              <div>
                <label className='flex flex-col gap-2' htmlFor="usermail">E-mail</label>
                <Input id="usermail" placeholder='e-mail'/>
              </div>
              <div>
                <label className='flex flex-col gap-2 appearance-none' htmlFor="funcional">Senha</label>
                <Input id="password" placeholder='senha'/>
              </div>



              <footer className='flex gap-8 justify-center mt-10'>
                <Dialog.Close className='flex gap-2 items-center justify-center border rounded-lg bg-zinc-500 hover:bg-red-400 p-1 w-28'>
                  <XCircle className='w-6 h-6'/>
                  Cancelar
                </Dialog.Close>
                <button type='submit' className='flex gap-2 items-center justify-center border rounded-lg bg-teal-900 hover:bg-emerald-600 p-1 w-28'>
                  <CheckCircle className='w-6 h-6'/>
                  Logar
                </button>

              </footer>
            </form>
            <Dialog.Close />
           </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

    </div>
  )
  }