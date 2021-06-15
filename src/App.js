import Card from './components/Card'
import Nav from './components/Nav'

import './App.css'
// import { useState } from 'react'
import Movies from './data/data'

function App() {
  // const [filmes, setFilmes] = useState([])
  return (
    <div className="app">
      <Nav />
      <div className="container">
        <h2>Filmes</h2>
        <div className="container-filmes">
          <Card filmes={Movies} />
        </div>
      </div>
    </div>
  )
}

export default App
