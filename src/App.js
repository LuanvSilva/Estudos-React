import './App.css'
import OutrasListas from './components/OutrasListas';



function App() {
const meuItens = ['React', ' Vue ', ' Angular ' ]

  return (
    <div className="App">
      <h1>Renderizaçao Listas</h1>
    <OutrasListas itens={meuItens}/>
    <OutrasListas itens={{}}/>
    </div>
  )
}

export default App;
