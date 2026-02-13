import { useNavigate } from 'react-router-dom'
import Mailbox from '../assets/Mailbox.png'
import StardewMail from '../assets/StardewMail.png'
import titleScroll from '../assets/titleScroll.png'

export default function YouveGotMail() {
    const navigate = useNavigate()

    const handleMailClick = () => {
        navigate('/opened-letter')
    }

    return (
        <>
            <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <img src={titleScroll} alt="Title Scroll" style={{ maxWidth: '553px', width: '100%', height: 'auto' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <img 
                    src={StardewMail} 
                    className="StardewMail" 
                    alt="Stardew Mail" 
                    onClick={handleMailClick}
                    style={{ 
                        maxWidth: '300px', 
                        width: '100%', 
                        height: 'auto',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                <img src={Mailbox} className="Mailbox" alt="Mailbox" />
            </div>
        </>
    )
}