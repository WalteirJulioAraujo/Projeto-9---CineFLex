import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Seat from './Seat';
import BuyerInfo from "./BuyerInfo"
import ButtonBooking from "./ButtonBooking"

export default function InfoSession({setInfo,info}){
    const {idSessao} = useParams();
    const [seats,setSeats] = useState([]);

    //Informaçoes que preciso enviar p/ o servidor:
    const [buyerName,setBuyerName] = useState("");
    const [buyerCpf,setBuyerCpf] = useState("");
    const [seat,setSeat] =useState([]);

    useEffect(()=>{
        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`)
        promisse.then((e)=>{
            setSeats(e.data.seats)
            console.log(e.data)
            setInfo({title:e.data.movie.title,weekday:e.data.day.weekday,date:e.data.day.date})
        });
    },[])
    
    return(
        <>
        <div className="title">Selecione os assentos</div>
        {seats.map((e)=>{
                return(
                    <Seat name={e.name} id={e.id} isAvailable={e.isAvailable} seat={seat} setSeat={setSeat}/>
                );
            })}
        <BuyerInfo buyerCpf={buyerCpf}  setBuyerCpf={setBuyerCpf} buyerName={buyerName}  setBuyerName={setBuyerName}/>
        <ButtonBooking buyerName={buyerName} buyerCpf={buyerCpf} seat={seat} setInfo={setInfo} info={info}/>
        </>
    )
}