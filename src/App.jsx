import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import YouveGotMail from './components/YouveGotMail'
import Accepted from './components/Accepted'
import OpenedLetter from './components/OpenedLetter'

function App() {
  return (
    <Routes>
      <Route path="/" element={<YouveGotMail />} />
      <Route path="/accepted" element={<Accepted />} />
      <Route path="/opened-letter" element={<OpenedLetter />} />
      <Route path="/got-mail" element={<YouveGotMail/>} />
    </Routes>
  )
}

export default App
