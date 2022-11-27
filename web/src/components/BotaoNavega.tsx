interface BotaoProps {
   nome: string
}

export function BotaoNavega(props: BotaoProps) {
   return (
      <>
      <button className="border border-x-stone-700 bg-zinc-700 text-gray-300 w-auto p-2">
         {props.nome}
      </button>
      </>
   )
}