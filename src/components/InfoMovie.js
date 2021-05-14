import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios';
import MovieSession from "./MovieSession"
import Footer from './Footer';

export default function InfoMovie(){
    const [movies,setMovies] = useState([]);
    const [url,setUrl] = useState("");
    const [name,setName] = useState("");

    const{idFilme} = useParams();
    useEffect(()=>{
        const promisse = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`)
        promisse.then((e)=>{
            setMovies(e.data.days)
            setUrl(e.data.posterURL)
            setName(e.data.title)
        });
    },[])

    return(
        <>
            <div class="title">Selecione o Horário</div>
            <div class="session">
                {movies.map((e)=>{
                    return(
                        <MovieSession weekday={e.weekday} date={e.date} showtimes={e.showtimes}/>
                    );
                }
                )}
            </div>
            <Footer url={url} name={name} time={""}/>
        </>
    )
}