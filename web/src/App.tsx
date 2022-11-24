import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog';


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
          <form className='mt-2'>
            <div>
              <label className='flex flex-col gap-2' htmlFor="username">Nome: </label>
              <input id="username" placeholder='seu nome de guerra'/>
            </div>
            <div>
              <label htmlFor="usermail">E-mail: </label>
              <input id="usermail" placeholder='seu email' className='bg-zinc-800 py-3 px-4 rounded text-sm placeholder:text-zinc-400'/>
            </div>
            <div>
              <label htmlFor="matricula">Nome: </label>
              <input id="matricula" type="number" placeholder='seu ID Funcional'/>
            </div>
            <div>
              <label htmlFor="plantao">Plantão: </label>
              <input id="userplantao" placeholder='seu plantão'/>
            </div>
          </form>
          <Dialog.Close />
      </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    
    </div>
  )
}

export default App
