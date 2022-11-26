import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog';
import { Input } from './components/Input';
import { CheckCircle, XCircle } from 'phosphor-react'
import { BotaoRegistra } from './components/BotaoRegistra';
import { BotaoLogin } from './components/BotaoLogin';
import { BotaoNavega } from './components/BotaoNavega';


function App() {

  return (
    <div className='flex flex-col bg-slate-400 h-screen shadow-lg shadow-black/25'>

      <div className='flex justify-center border text-4xl font-extrabold bg-zinc-800 text-neutral-100'>
        <h1>Plantão v4</h1>
      </div>
      <div id="comandos" className='flex flex-col gap-4 items-center justify-center h-screen bg-zinc-700'>
      <div className='flex justify-center'>
        <BotaoRegistra />
      </div>
   
      <div className='flex justify-center'>
        <BotaoLogin />
      </div>
      <div>
        <BotaoNavega nome="Teste"/>
        <BotaoNavega nome="Outro"/>

        <BotaoNavega nome="Entendi"/>

      </div>
      </div>
      
    

    </div>
  )
}

export default App
