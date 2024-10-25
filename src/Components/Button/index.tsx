import { Link } from 'react-router-dom';
import './style.css'

export const Button1 = ({ content, link }: { content: string, link: string }) => {

    return (
        <button className='btn1'>
            <Link className='span-1' to={link}>{content}</Link>
            <Link className='span-2' to={link}>{content}</Link>
        </button>
    )
}

export const Button2 = ({ content, link }: { content: string, link: string }) => {

    return (
        <button className='btn2'>
            <Link className='text-1' to={link}>{content}</Link>
            <Link className='text-2' to={link}>{content}</Link>
        </button>
    )
}
export const Button3 = ({ content, link }: { content: string, link: string }) => {

    return (
        <button className='btn3'>
            <Link className='span-1' to={link}>{content}</Link>
        </button>
    )
}
