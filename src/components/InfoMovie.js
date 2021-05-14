import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios';
import MovieSession from "./MovieSession"

export default function InfoMovie(){
    const [movies,setMovies] = useState([]);

    const{idFilme} = useParams();
    useEffect(()=>{
        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`)
        promisse.then((e)=>setMovies(e.data.days));
    },[])

    return(
        <>
            <div class="title">Selecione o Horário</div>
            {movies.map((e)=>{
                return(
                    <MovieSession weekday={e.weekday} date={e.date} showtimes={e.showtimes}/>
                );
            }
            )}
        </>
    )
}