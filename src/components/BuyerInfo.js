import {useState} from "react";

export default function BuyerInfo({setBuyerCpf,buyerCpf,buyerName,setBuyerName}){
    
    return (
        <>
        <div>
            Nome do comprador
            <input type="text" placeholder="Digite seu nome..." onChange={(e)=>setBuyerName(e.target.value)} value={buyerName}/>
        </div>
        <div>
            CPF do comprador
            <input type="text" placeholder="Digite seu CPF..." onChange={(e)=>setBuyerCpf(e.target.value)} value={buyerCpf}/>
        </div>
        </>
    )
}