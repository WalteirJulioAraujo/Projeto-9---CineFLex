import axios from 'axios'
import {Link} from 'react-router-dom'

export default function ButtonBooking({buyerName,buyerCpf,seat,setInfo,info}){
    const message = {ids:seat,name:buyerName,cpf:buyerCpf}
    function SendInfo(){
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many",message);
        setInfo({...info,seats:seat,name:buyerName,cpf:buyerCpf})
    }
    
    return(
        <Link to="/sucesso">
            <div className="booking" onClick={SendInfo}>Reservar ingressos</div>
        </Link>
    )
}
