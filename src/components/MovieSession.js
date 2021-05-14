import {Link} from 'react-router-dom'

export default function MovieSession({weekday , date, showtimes}){
    return (
        <>
            
            <span>{`${weekday} - ${date}`}</span>
            <div className="schedule">
            {showtimes.map((e)=>{
                return(
                    <Link to={`/sessao/${e.id}`}>
                        <button className="schedule-button">{e.name}</button>
                    </Link>
                )
            })}
            </div>
            
        </>
    );
}