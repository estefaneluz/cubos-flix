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
      method: 'GET',
    })

    const {results} = await response.json();

    const filmesFormatados = [];

    for (const filme of results) {
      filmesFormatados.push({
        id: filme.id,
        title: filme.title,
        poster_path: filme.poster_path,
        vote_average: filme.vote_average,
        price: filme.price,
        qtd_bag: 0
      });
    }

    setFilmes(filmesFormatados);

  }

  return (
    <div className="app">
      <Nav />
      <div className="container">
        <div>
          <h2>Filmes</h2>
          <div className="container-filmes">
            <Card filmes={filmes} />
          </div>
        </div>

        <Bag/>
      </div>
    </div>
  )
}

export default App
