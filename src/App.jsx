import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import WelcomPage from './pages/Welcome.jsx'
import Success from './pages/Success.jsx'
import Error from './pages/Error.jsx'

import './App.css'

function App() {

  return (
    <Router>
      <div className='pageContainer'>
        <Routes>
          <Route path="/" exact element={<WelcomPage/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/error" element={<Error/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
