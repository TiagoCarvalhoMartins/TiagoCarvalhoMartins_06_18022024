import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './styles/index.scss'
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
