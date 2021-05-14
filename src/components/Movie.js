import {Link} from 'react-router-dom'

export default function Movie({id, posterURL}){
    return(
        
        <div class="film-poster">
            <Link to={`/filme/${id}`}>
                <img src={posterURL} alt=""/>
            </Link>
        </div>
    )
}