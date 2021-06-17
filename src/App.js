import Card from './components/Card'
import Nav from './components/Nav'
import Bag from './components/Bag'

import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [filmes, setFilmes] = useState([])
  const [sacola, setSacola] = useState([])
  const [ranking, setRanking] = useState([...filmes])
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    popularFilmes();
  }, [])

  function sortFilmesVoteAverage(a, b){
    return b.vote_average - a.vote_average;
  }

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
    let localRanking = [...filmes].sort(sortFilmesVoteAverage);
    localRanking = localRanking.splice(0,5);
    setRanking(localRanking);
  }

  async function addFilmesSacola(value, id){
    
    const localFilmes = [...filmes]
    const localSacola = [...sacola]
    const indexFilme = localFilmes.findIndex(filme => filme.id === id)
    const indexSacola = localSacola.findIndex(filme => filme.id === id)

    if(indexFilme===-1) return;
    
    const qtdSacolaFilme = localFilmes[indexFilme].qtd_bag + value;
    let localTotal = total + (value * localFilmes[indexFilme].price);
    if(localTotal<0) localTotal = 0;

    if(indexSacola===-1) localSacola.push(localFilmes[indexFilme])
    if(qtdSacolaFilme===0) localSacola.splice(indexSacola, 1)
    if(qtdSacolaFilme>=0) localFilmes[indexFilme].qtd_bag = qtdSacolaFilme

    setFilmes([...localFilmes])
    setSacola([...localSacola])
    setTotal(localTotal)
  }

  return (
    <div className="app">
      <Nav />
      <div className="container">
        <div>
          <h2>Top Filmes</h2>
          <div className="container-filmes">
            <Card filmes={ranking} addFilmesSacola={addFilmesSacola}/>
          </div>

          <h2>Filmes</h2>
          <div className="container-filmes">
            <Card filmes={filmes} addFilmesSacola={addFilmesSacola}/>
          </div>
        </div>

        <Bag filmes={sacola} addFilmesSacola={addFilmesSacola} total={total}/>
      </div>
    </div>
  )
}

export default App
