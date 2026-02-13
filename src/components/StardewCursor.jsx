import { useState, useEffect } from 'react'
import stardewCursor from '../assets/cursor.png'

export default function StardewCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseDown = () => setIsMouseDown(true)
    const handleMouseUp = () => setIsMouseDown(false)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', updateCursorPosition)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: 32,
        height: 32,
        pointerEvents: 'none',
        zIndex: 9999,
        transform: `translate(-50%, -50%) scale(${isMouseDown ? 0.9 : 1})`,
        transition: 'transform 0.1s ease',
      }}
    >
      <img 
        src={stardewCursor} 
        alt="Stardew Cursor" 
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          imageRendering: 'pixelated',
          objectFit: 'contain',
        }}
      />
    </div>
  )
}