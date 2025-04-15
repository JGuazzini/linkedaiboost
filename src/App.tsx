import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import { Box } from '@mui/material'


function App() {
  return (

    <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', width: '100vw' }}>
      {/* header + rutas + footer */}


      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  )
}

export default App
