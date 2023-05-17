import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { WelcomePage } from 'Components/WelcomePage/WelcomePage';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
