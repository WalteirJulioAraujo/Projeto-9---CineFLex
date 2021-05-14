export default function OrderSucess({info}){
    
    return(
        <>
        <div className="title">Pedido feito com sucesso</div>
        <div>
            <div className="subtitle">Filme e sessão</div>
            <div className="info">
                <div>{`${info.title}`}</div>
                <div>{`${info.date} ${info.hour}`}</div>
            </div> 
        </div>
        <div>
            <div className="subtitle">Ingressos</div>
            {info.seats.map((e)=><div className="info">{`Assento: ${e}`}</div>)}
        </div>
        <div>
            <div className="subtitle">Comprador</div>
            <div className="info">
                <div>{`Nome: ${info.name}`}</div>
                <div>{`CPF: ${info.cpf}`}</div>
            </div>
        </div>
        </>
    )
}