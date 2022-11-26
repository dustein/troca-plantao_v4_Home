interface BotaoProps {
   nome: string
}

export function BotaoNavega(props: BotaoProps) {
   return (
      <>
      <button>
         {props.nome}
      </button>
      </>
   )
}