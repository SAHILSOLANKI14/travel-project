import { Routes ,Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contactus from './Pages/Contactus'
import SignIn from './Pages/SignIn'
import SignOut from './Pages/SignOut'

 
function App() {

  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Contact-US" element={<Contactus/>} />
        <Route path="/Sign-Up" element={<SignOut/>} />
        <Route path="/Signin" element={<SignIn/>} />
      </Routes>
      </>
  )

}

export default App
