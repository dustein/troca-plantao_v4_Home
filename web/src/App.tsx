import './styles/main.css'

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
        <div>
              <input className='' type="radio" value="none" id="radio_1" name="plantao"/>
              <label>SAP I</label>
            </div>
        </p>
        
          
        </form>
      </div>

    </div>
  )
}

export default App
