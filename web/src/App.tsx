import './styles/main.css'
import * as Select from '@radix-ui/react-select';

function App() {

  return (
    <div className='bg-gray-400 h-44'>
      <header>
        <h1 className='bg-sky-900 text-gray-50 text-center font-bold text-4xl p-4'>Troca Plantão versao 4</h1>
      </header>

      <div id='formulario'>
        <form action="" className='text-center py-5'>

        <p>
        <label className='text-lg '>Nome: </label>
        <input className='px-2 py-1 border-2 rounded-lg border-cyan-800 ' type="text" placeholder="Nome para Cadastrar" name="uname" required></input>
        </p>

        <p>
        <label className='text-lg '>E-mail: </label>
        <input className='px-2 py-1 border-2 rounded-lg border-cyan-800 ' type="text" placeholder="Nome para Cadastrar" name="uname" required></input>
        </p>

        <p>
        <label className='text-lg '>Matrícula: </label>
        <input className='px-2 py-1 border-2 rounded-lg border-cyan-800 ' type="text" placeholder="Nome para Cadastrar" name="uname" required></input>
        </p>
        <p>
          <div className=''>
              <input className='' type="radio" value="none" id="radio_1" name="plantao"/>
              <label className=''>SAP I</label>
              
            </div>
        </p>
        
          
        </form>
      </div>

      <Select.Root>

        <Select.Trigger>
          <Select.Value>Selecione o Plantão</Select.Value>
          <Select.Icon></Select.Icon>
        </Select.Trigger>
      
        <Select.Portal>
          <Select.Content className='bg-black/20 rounded-lg shadow-md border border-cyan-600 relative top-1/2 left-1/2 flex items-center justify-items-center'>
            <Select.ScrollUpButton></Select.ScrollUpButton>
            <Select.Viewport className='p-14'>
              <Select.Item className='text-xl leading-normal text-blue-700 rounded-lg h-6 p-4 flex relative' value="SAP 1">SAP 1</Select.Item>
              <Select.Item className='text-xl leading-normal text-blue-700 rounded-lg h-6 p-4 relative' value="SAP 2">SAP 2</Select.Item>
              <Select.Item className='text-xl leading-normal text-blue-700 rounded-lg h-6 p-4 relative' value="SAP 3">SAP 3</Select.Item>
              <Select.Item className='text-xl leading-normal text-blue-700 rounded-lg h-6 p-4 relative' value="SAP 4">SAP 4</Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>

      </Select.Root>

      <div id="teste">
        
      </div>

    </div>


    
  )
}

export default App
