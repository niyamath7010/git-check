import { Link } from "react-router-dom";


export default function NavIcon(props){
    return(
        <>
            <Link to={props.path}>{props.name}</Link>
        </>
    )
}