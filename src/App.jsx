import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Contactus from './pages/Contactus'
import Header from './components/Header'
import Maintenance from './pages/Maintenance'
import Renovation from './pages/Renovation'
import TendancyProperty from './pages/TendancyProperty'
import VisaImmigration from './pages/VisaImmigration'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/contact-us' element={<Contactus/>}/>
      <Route path='/maintenance' element={<Maintenance/>}/>
      <Route path='/renovation' element={<Renovation/>}/>
      <Route path='/tendancyproperty' element={<TendancyProperty/>}/>
      <Route path='/visaimmigration' element={<VisaImmigration/>}/>
    </Routes>
    </BrowserRouter>
  )
}

