import stardewCursor from '../assets/cursor.png'

export default function StardewCursor() {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        position: 'relative',
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
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </div>
  )
}