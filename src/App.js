import Card from './components/Card'
import './App.css'
// import { useState } from 'react'
import Movies from './data/data'

function App() {
  // const [filmes, setFilmes] = useState([])

  return (
    <div className="app">
      <h2>Filmes</h2>
      <Card filmes={Movies} />
    </div>
  )
}

export default App
