import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Seat from './Seat';
import BuyerInfo from "./BuyerInfo"
import ButtonBooking from "./ButtonBooking"
import Footer from "./Footer"

export default function InfoSession({setInfo,info}){
    const {idSessao} = useParams();
    const [seats,setSeats] = useState([]);

    //Informaçoes que preciso enviar p/ o servidor:
    const [buyerName,setBuyerName] = useState("");
    const [buyerCpf,setBuyerCpf] = useState("");
    const [seat,setSeat] = useState([]);
    const [time,setTime] = useState("");
    const [name,setName] = useState("");
    const [url,setURL] = useState("");

    useEffect(()=>{
        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`)
        promisse.then((e)=>{
            setSeats(e.data.seats)
            console.log(e.data)
            setInfo({title:e.data.movie.title,weekday:e.data.day.weekday,date:e.data.day.date,hour:e.data.name})
            setTime(e.data.name);
            setName(e.data.movie.title);
            setURL(e.data.movie.posterURL);
        });
    },[])
    
    return(
        <>
        <div className="title">Selecione os assentos</div>
        <div className="seats">
            {seats.map((e)=>{
                    return(
                        <Seat name={e.name} id={e.id} isAvailable={e.isAvailable} seat={seat} setSeat={setSeat}/>
                    );
                })}
        </div>
        <BuyerInfo buyerCpf={buyerCpf}  setBuyerCpf={setBuyerCpf} buyerName={buyerName}  setBuyerName={setBuyerName}/>
        <ButtonBooking buyerName={buyerName} buyerCpf={buyerCpf} seat={seat} setInfo={setInfo} info={info}/>
        <Footer url={url} name={name} time={time}/>
        </>
    )
}