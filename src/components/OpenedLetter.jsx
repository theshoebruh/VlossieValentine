import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import arrow from '../assets/arrow.png'
import LetterBox from '../assets/LetterBox.png'

export default function OpenedLetter() {
    const [currentPage, setCurrentPage] = useState(0)
    const navigate = useNavigate()

    const letterPages = [
        {
            content: (
                <>
                    My Dearest duo, <br /><br />

                    It is with great honor and love that I can write this letter to you. For the first time in my life I am able to enjoy a day dedicated to love with someone that loves me as much as I love them.
                </>
            )
        },
        {
            content: (
                <>
                    You have truly shown me what it's like when someone returns the love and effort by tenfold the amount that you give them and shown me what it's like to be appreciated and adored with pure and genuine intentions.
                </>
            )
        },
        {
            content: (
                <>
                    I can confidently express my emtions when I say, you are one of the best things that have happened to me and to have come into my life. You have the brightest smile and soul even more so.
                </>
            )
        },
        {
            content: (
                <>
                    You truly are, My Dearest Duo for life. <br /><br />

                    I love you, <br /><br />
                    From: Your sweet boy and valentine for life &lt;3
                </>
            )
        }
    ]

    const handleNextPage = () => {
        if (currentPage < letterPages.length - 1) {
            setCurrentPage(currentPage + 1)
        } else {
            navigate('/accepted')
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ fontFamily: "'SVBold', sans-serif", color: '#8B4513', fontSize: '48px', zIndex: 1000, textAlign: 'left' }}>
                {letterPages[currentPage].content}
            </h1>
            <div style={{ position: 'relative', backgroundColor: 'red'}}>
                <img 
                    src={LetterBox} 
                    className="LetterBox" 
                    alt="Letter Box" 
                    style={{ 
                        transform: 'scale(4.326)', 
                        marginTop: '-400px',
                        width: 'auto', 
                        height: 'auto',
                    }}
                />
                {currentPage > 0 && (
                    <img 
                        src={arrow} 
                        alt="Previous page arrow" 
                        onClick={handlePreviousPage}
                        style={{
                            position: 'absolute',
                            left: '-450px',
                            bottom: '-250px',
                            cursor: 'pointer',
                            transition: 'transform 0.2s ease',
                            zIndex: 1001,
                            transform: 'rotate(180deg)',
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'rotate(180deg) scale(1.2)'}
                        onMouseLeave={(e) => e.target.style.transform = 'rotate(180deg) scale(1)'}
                    />
                )}
                <img 
                    src={arrow} 
                    alt="Next page arrow" 
                    onClick={handleNextPage}
                    style={{
                        position: 'absolute',
                        right: '-450px',
                        bottom: '-250px',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease',
                        zIndex: 1001,
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
            </div>
        </div>
    )
}

