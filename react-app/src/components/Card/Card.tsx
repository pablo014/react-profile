import 'src/components/Card/Card.css'

function Card({ children }) {
    return <div className='card'>
        { children }
    </div>
}

export default Card