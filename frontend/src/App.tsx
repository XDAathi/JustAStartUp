import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../pages/LandingPage/Landing"
import LandingPage from '../pages/LandingPage/Landing';
import './index.css'

function App() {

  return (<Router>
    <div className='w-full min-h-screen'>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
      </Routes>
    </div>
  </Router>)
}

export default App
