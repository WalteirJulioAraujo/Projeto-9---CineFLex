import {useState} from "react";

export default function BuyerInfo({setBuyerCpf,buyerCpf,buyerName,setBuyerName}){
    
    return (
        <>
        <div class="inputs">
            <div className="input">
                <span>Nome do comprador</span>
                <input type="text" placeholder="Digite seu nome..." onChange={(e)=>setBuyerName(e.target.value)} value={buyerName}/>
            </div>
            
            <div className="input">
                <span>CPF do comprador</span>
                <input type="text" placeholder="Digite seu CPF..." onChange={(e)=>setBuyerCpf(e.target.value)} value={buyerCpf}/>
            </div>
            
        </div>
        </>
    )
}