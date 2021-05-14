import {useState} from 'react'

export default function Seat({name,isAvailable,seat,setSeat,id}){

    const [classe,setClasse] = useState("");

    const available = isAvailable?"seat":"seat not-available"

    function selecionarAssento(){
    
        if(isAvailable){
            if(classe===''){
                setClasse('selected');
                setSeat([...seat,id])
            }else{
                setClasse('');
                setSeat(seat.filter((e)=>e!==id))
            }
        }else{
            alert("assento indisponível");
        }   
    }

    return(
        <button className={`${available} ${classe}`} onClick={selecionarAssento}>{name}</button>
    );
}