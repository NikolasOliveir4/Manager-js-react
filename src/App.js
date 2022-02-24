import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Empresa from './components/pages/Empresa'
import Contato from './components/pages/Contato'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'


import Container from './components/layouts/Container'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

function App() {
  return (
  <Router>
   <Navbar />
    <Container customClass='min-height'>
      <Routes >
        <Route exact path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/empresa' element={<Empresa />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/newproject' element={<NewProject />}/>
      </Routes>
    </Container>
    <Footer />
  </Router>
  );
}

export default App;
