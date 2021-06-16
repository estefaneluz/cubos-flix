import Card from './components/Card'
import Nav from './components/Nav'
import Bag from './components/Bag'

import './App.css'
import { useState, useEffect } from 'react'
import Movies from './data/data'

function App() {
  const [filmes, setFilmes] = useState([])

  useEffect(()=>{
    popularFilmes();
  }, [])
  
  async function popularFilmes(){
    const response = await fetch('https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR', 
    {
      method: 'GET'
    })

    const data = await response.json();

    console.log(data);
  }
  return (
    <div className="app">
      <Nav />
      <div className="container">
        <div>
          <h2>Filmes</h2>
          <div className="container-filmes">
            <Card filmes={Movies} />
          </div>
        </div>

        <Bag/>
      </div>
    </div>
  )
}

export default App
