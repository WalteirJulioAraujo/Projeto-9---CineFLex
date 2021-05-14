import {Link} from 'react-router-dom'

export default function MovieSession({weekday , date, showtimes}){
    return (
        <>
            <div class="session">
                <span>{`${weekday} - ${date}`}</span>
                <div className="schedule">
                {showtimes.map((e)=>{
                    return(
                        <Link to={`/sessao/${e.id}`}>
                            <button>{e.name}</button>
                        </Link>
                    )
                })}
                </div>
            </div>
        </>
    );
}