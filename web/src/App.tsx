import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog';
import { Input } from './components/Input';
import { CheckCircle, XCircle } from 'phosphor-react'
import { BotaoRegistra } from './components/BotaoRegistra';

function App() {

  return (
    <div className='flex justify-center gap-4 flex-col bg-slate-400 max-w-4xl m-auto h-screen shadow-lg shadow-black/25'>

      <header className='flex justify-center border text-4xl font-extrabold'>
        <h1>Plantão</h1>
      </header>

      <div className='flex justify-center border'>
        <h1>Login</h1>
      </div>
   
      <div className='flex justify-center border'>
        <BotaoRegistra />
      </div>
      
    

    </div>
  )
}

export default App
