import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog';
import { Input } from './components/Input';
import { CheckCircle, XCircle } from 'phosphor-react'

function App() {

  return (
    <div className='flex justify-center gap-4 flex-col'>
    <h1 className='flex justify-center'>Teste</h1>

    <Dialog.Root>
      <Dialog.Trigger>
        <button className='text-center flex items-center justify-center border w-min p-3 m-auto border-cyan-700'>MENU</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
        <Dialog.Content className='fixed bg-slate-700 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
          <Dialog.Title className='text-3xl font-black'>Cadastro de Operacional</Dialog.Title>
          <Dialog.Description className='text-xl'>preencha seus dados</Dialog.Description>
          <form className='mt-2 flex flex-col gap-2'>
            <div>
              <label className='flex flex-col gap-2' htmlFor="username">Nome: </label>
              <Input id="username" placeholder='seu nome de guerra'/>
            </div>
            <div>
              <label className='flex flex-col gap-2' htmlFor="usermail">E-mail: </label>
              <Input id="usermail" placeholder='seu email'/>
            </div>
            <div>
              <label className='flex flex-col gap-2' htmlFor="matricula">Nome: </label>
              <Input id="matricula" type="number" placeholder='seu ID Funcional'/>
            </div>
            <div className='flex gap-2  justify-evenly'>
              <label className='flex' htmlFor="plantao">Plantão: </label>

                <button title="Plantão 01" className='w-8 h-8 rounded bg-zinc-800 text-zinc-400'>I</button>
                <button title="Plantão 02" className='w-8 h-8 rounded bg-zinc-800 text-zinc-400'>II</button>
                <button title="Plantão 03" className='w-8 h-8 rounded bg-zinc-800 text-zinc-400'>III</button>
                <button title="Plantão 04" className='w-8 h-8 rounded bg-zinc-800 text-zinc-400'>IV</button>
            </div>

            <footer className='flex gap-4'>
              <button className='flex gap-2 items-center justify-center border rounded-lg bg-slate-900 p-1 w-28'>
                <XCircle />
                Cancelar
              </button>
              <button type='submit' className='flex gap-2 items-center justify-center border rounded-lg bg-slate-900 p-1 w-28'>
                <CheckCircle />
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

export default App
