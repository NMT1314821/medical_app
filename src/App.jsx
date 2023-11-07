import {Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import LandingPage from './pages/LandingPage';
import Home from './pages/Home'

import './App.css'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/home' element={<Home />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
