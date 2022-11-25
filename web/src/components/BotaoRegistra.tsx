import * as Dialog from '@radix-ui/react-dialog'
import { Input } from './Input';
import { CheckCircle, XCircle } from 'phosphor-react'

export function BotaoRegistra() {

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <button className='text-center flex items-center justify-center border w-min p-3 m-auto border-cyan-700'>Registrar</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
          <Dialog.Content className='fixed bg-slate-700 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl font-black'>Cadastro de Operacional</Dialog.Title>
            <Dialog.Description className='text-xl'>preencha seus dados</Dialog.Description>
            <form className='mt-6 flex flex-col gap-2'>
              <div>
                <label className='flex flex-col gap-2' htmlFor="username">Nome</label>
                <Input id="username" placeholder='nome de guerra'/>
              </div>
              <div>
                <label className='flex flex-col gap-2' htmlFor="usermail">E-mail</label>
                <Input id="usermail" placeholder='e-mail'/>
              </div>
              <div>
                <label className='flex flex-col gap-2 appearance-none' htmlFor="funcional">ID Funcional</label>
                <Input id="funcional" type="number" placeholder='ID Funcional'/>
              </div>

              <div className='flex flex-col  gap-2  justify-evenly'>
                <label className='flex justify-center' htmlFor="plantao">Plantão</label>
                <div className='flex justify-evenly gap-3'>
                  <button title="Plantão 01" className='w-10 h-10 rounded hover:text-white hover:border bg-zinc-800 text-zinc-400'>I</button>
                  <button title="Plantão 02" className='w-10 h-10 rounded hover:text-white hover:border bg-zinc-800 text-zinc-400'>II</button>
                  <button title="Plantão 03" className='w-10 h-10 rounded hover:text-white hover:border bg-zinc-800 text-zinc-400'>III</button>
                  <button title="Plantão 04" className='w-10 h-10 rounded hover:text-white hover:border bg-zinc-800 text-zinc-400'>IV</button>
                </div>
              </div>

              <footer className='flex gap-8 justify-center mt-10'>
                <Dialog.Close className='flex gap-2 items-center justify-center border rounded-lg bg-zinc-500 hover:bg-red-400 p-1 w-28'>
                  <XCircle className='w-6 h-6'/>
                  Cancelar
                </Dialog.Close>
                <button type='submit' className='flex gap-2 items-center justify-center border rounded-lg bg-teal-900 hover:bg-emerald-600 p-1 w-28'>
                  <CheckCircle className='w-6 h-6'/>
                  Gravar
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