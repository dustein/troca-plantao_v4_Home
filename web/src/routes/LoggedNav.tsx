import { Link } from "react-router-dom";
import { BotaoNavega } from "../components/BotaoNavega";

export function LoggedNav() {
   return (
      <div className="flex flex-col bg-slate-400 h-screen shadow-lg shadow-black/25">

         <div className='flex justify-center text-4xl font-extrabold bg-zinc-800 text-neutral-100'>
            <h1>Plantão v4</h1>
         </div>

         <div className="flex flex-col items-center gap-2 justify-center pt-4">
            <h2>Balcao de Plantoes</h2>
            
            <Link to={'listajobs'}>
               <BotaoNavega nome = "Plantoes Disponiveis" />
            </Link>

            <h2>Meus Plantoes</h2>

            <Link to={'acceptedjobs'}>
               <BotaoNavega nome = "Aceitei" />

            </Link>
            <Link to={'offerjob'}>
               <BotaoNavega nome = "Criar Oferta" />

            </Link>
            <Link to={'acceptedoffers'}>
               <BotaoNavega nome = "Ofertas Aceitas" />

            </Link>
         </div>

      </div>
   )
}