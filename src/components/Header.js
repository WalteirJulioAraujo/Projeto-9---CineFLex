import {Link} from "react-router-dom"
export default function Header(){
    return(
        <>
        <div className="header">
            <Link to="/">
                <div style={{width:'fit-content'}}>
                    CineFlex
                </div>
            </Link>
        </div>
        </>
    );
}