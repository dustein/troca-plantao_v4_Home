import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog';
import { Input } from './components/Input';
import { CheckCircle, XCircle } from 'phosphor-react'
import { BotaoRegistra } from './components/BotaoRegistra';
import { BotaoLogin } from './components/BotaoLogin';
import { BotaoNavega } from './components/BotaoNavega';
import { Header } from './components/Header';


function App() {

  return (
    <div className='flex flex-col bg-slate-400 h-screen shadow-lg shadow-black/25'>

      <Header />

      <div id="comandos" className='flex flex-col gap-4 items-center justify-center h-screen bg-zinc-700'>
      <div className='flex justify-center'>
        <BotaoRegistra />
      </div>
   
      <div className='flex justify-center'>
        <BotaoLogin />
      </div>

      </div>
      
    

    </div>
  )
}

export default App
