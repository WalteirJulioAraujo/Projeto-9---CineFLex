

export default function MovieSession({weekday , date, showtimes}){
    console.log(showtimes)
    return (
        <>
            <div class="session">
                <span>{`${weekday} - ${date}`}</span>
                <div className="schedule">
                {showtimes.map((e)=>{
                    return(
                        <button>{e.name}</button>
                    )
                })}
                </div>
            </div>
        </>
    );
}