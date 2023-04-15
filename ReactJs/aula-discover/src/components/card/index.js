import './index.css'

export function Card({time, name}){
    return(
        <div className='card'>
            <strong >{name}</strong>
            <small>{time}</small>
        </div>
    )
}