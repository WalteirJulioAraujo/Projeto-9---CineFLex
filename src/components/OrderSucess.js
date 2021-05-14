export default function OrderSucess({info}){
    console.log(info)
    return(
        <>
        <h1>Pedido feito com sucesso</h1>
        <div>
            <div>Filme e sessão</div>
            <div>{`${info.title}\n${info.date} ${info.hour}`}</div>
        </div>
        <div>
            <div>Ingressos</div>
            {info.seats.map((e)=><div>{`Assento: ${e}`}</div>)}
        </div>
        <div>
            <div>Comprador</div>
            <div>{`Nome:${info.name}\nCPF:${info.cpf}`}</div>
        </div>
        </>
    )
}