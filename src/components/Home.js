import {useState,useEffect} from 'react'
import axios from 'axios'
import Movie from "./Movie"

export default function Home(){
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");
        promisse.then((e)=>{
            setMovies(e.data)
        })
    },[])
    
    return(
        <>
            <div class="title">Selecione o Filme</div>
            <div class="movies">
                {movies.map((e)=> <Movie id={e.id} posterURL={e.posterURL}/>
                )}
            </div>
        </>
    );
}