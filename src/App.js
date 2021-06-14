import Card from './components/Card'
import './App.css'
// import { useState } from 'react'
import Movies from './data/data'

function App() {
  // const [filmes, setFilmes] = useState([])

  return (
    <div className="app">
      <h2>Filmes</h2>
      <div className="container">
        <Card filmes={Movies} />
      </div>
    </div>
  )
}

export default App
