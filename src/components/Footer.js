export default function Footer({url,name,time}){
    return(
        <div className="footer">
            <img src={url} alt="" />
            <div className="info-footer">{time?`${name} - Horário: ${time}`:`${name}`}</div>
        </div>
    )
}