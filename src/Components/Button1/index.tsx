import { Link } from 'react-router-dom';
import './style.css'

export const Button1 = ({content, link} : {content: string, link : string}) => {
    
    return (
        <button className='btn1'>
            <Link className='span-1' to={link}>{content}</Link>
            <Link className='span-2' to={link}>{content}</Link>
        </button>    
    )
}
