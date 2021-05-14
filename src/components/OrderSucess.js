export default function OrderSucess({info}){
    
    return(
        <>
        <div className="title">Pedido feito com sucesso</div>
        <div>
            <div className="subtitle">Filme e sessão</div>
            <div>{`${info.title}\n${info.date} ${info.hour}`}</div>
        </div>
        <div>
            <div className="subtitle">Ingressos</div>
            {info.seats.map((e)=><div>{`Assento: ${e}`}</div>)}
        </div>
        <div>
            <div className="subtitle">Comprador</div>
            <div>{`Nome:${info.name} - CPF:${info.cpf}`}</div>
        </div>
        </>
    )
}