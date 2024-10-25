import { Link } from 'react-router-dom';
import './style.css'

export const Button2 = ({content, link} : {content: string, link : string}) => {
    
    return (
        <button className='btn'>
            <Link className='text-1' to={link}>{content}</Link>
            <Link className='text-2' to={link}>{content}</Link>
        </button>    
    )
}
