import{BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import NavBar from './components/NavBar';
import Footer from './components/Footer';



function App() {
  return (
   
   <Router>
     <NavBar />
            <Routes>
                <Route exact path='/Home' element={<Home/>}> </Route>
                <Route  path='/Empresa' element={<Contato/>}> </Route>
                <Route  path='/Contato' element={<Empresa/>}> </Route>
            </Routes>
          <Footer/>

</Router>
)  
}

export default App;
