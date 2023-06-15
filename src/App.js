// Routing
// is switching once web page to another is known as routing
// to use routing - npm install react-router-dom
// implement links

import React from 'react'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Home from './Home'
import NotFound from './NotFound'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {' '}
              <Link to="/about">About Us</Link>
            </li>
            <li>
              {' '}
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
