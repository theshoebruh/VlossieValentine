import flossieLove from '../assets/flossielove.png'
import flossie from '../assets/flossie.webp'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Accepted() {
    const navigate = useNavigate()

    const HandleClick = () => {
        navigate('/got-mail')
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onClick={HandleClick}>
            <img src={flossieLove} className="flossieLove" alt="Flossie love" />
            <img src={flossie} className="flossie" alt="Flossie logo" />            
        </div>
    )
}