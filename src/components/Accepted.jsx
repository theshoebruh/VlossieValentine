import flossieLove from '../assets/flossielove.png'
import flossie from '../assets/flossie.webp'

export default function Accepted() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={flossieLove} className="flossieLove" alt="Flossie love" />
            <img src={flossie} className="flossie" alt="Flossie logo" />            
        </div>
    )
}