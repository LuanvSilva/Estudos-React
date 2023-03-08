import{BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import NavBar from './components/NavBar';


function App() {
  return (
   
   <Router>
     <NavBar />
            <Routes>
                <Route exact path='/Home' element={<Home/>}> </Route>
                <Route  path='/Empresa' element={<Contato/>}> </Route>
                <Route  path='/Contato' element={<Empresa/>}> </Route>
            </Routes>
          

</Router>
)  
}

export default App;
