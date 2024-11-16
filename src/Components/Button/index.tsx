import './style.css'

export const Button1 = ({ content, link }: { content: string, link: string }) => {

    return (
        <button className='btn1' role="link" onClick={() => window.location.href = link}>
            <span className='span-1' >{content}</span>
            <span className='span-2' >{content}</span>
        </button>
    )
}

export const Button2 = ({ content, link }: { content: string, link: string }) => {

    return (
        <button className='btn2' role="link" onClick={() => window.location.href = link}>
            <span className='text-1' >{content}</span>
            <span className='text-2' >{content}</span>
        </button>
    )
}
export const Button3 = ({ content, link }: { content: string, link: string }) => {

    return (
        <button className='btn3' role="link" onClick={() => window.location.href = link}>
            <span className='span-1'>{content}</span>
        </button>
    )
}
