import Card from './components/Card'
import Nav from './components/Nav'
import Bag from './components/Bag'
import { useState, useEffect } from 'react'
import { pesquisarFilmes, sortFilmesVoteAverage } from './utils/utils'
import './App.css'

function App() {
  const [filmes, setFilmes] = useState([])
  const [sacola, setSacola] = useState([])
  const [ranking, setRanking] = useState([])
  const [pesquisa, setPesquisa] = useState('')
  const [carregando, setCarregando] = useState(false)
  const [error, setError] = useState('')
  const [verRanking, setVerRanking] = useState(true)
  const [total, setTotal] = useState(0)

  useEffect(()=>{
    popularFilmes();
  }, [])

  async function popularFilmes(){
    const filmesFormatados = await pesquisarFilmes();
    setFilmes(filmesFormatados);

    let localRanking = [...filmesFormatados].sort(sortFilmesVoteAverage);
    localRanking = localRanking.splice(0,5);
    setRanking(localRanking);
  }

  async function addFilmesSacola(value, id){
    //qtd_bag só na sacola
    const localFilmes = [...filmes]
    const localSacola = [...sacola]
    const indexFilme = localFilmes.findIndex(filme => filme.id === id)
    const indexSacola = localSacola.findIndex(filme => filme.id === id)
    
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

  async function filtrarFilmes(event){
    event.preventDefault()
    const filmesFormatados = await pesquisarFilmes()
    
    if(!pesquisa) {
      setVerRanking(true)
      setFilmes(filmesFormatados)
      return;
    }
    setCarregando(true)
    try {
      const resultado = filmesFormatados.filter(filme => filme.title.toLowerCase().includes(pesquisa.toLowerCase()))
      setFilmes(resultado)
      setVerRanking(false)
    } catch{
      setError(error.message);
      popularFilmes();
    }
    console.log(pesquisa)
    setCarregando(false)
  }

  return (
    <div className="app">
      <Nav pesquisarFilmes={filtrarFilmes} pesquisa={pesquisa} setPesquisa={setPesquisa}/>
      <div className="container">
        <div>
          {verRanking &&
          <>
            <h2>Top Filmes</h2>
            <div className="container-filmes">
              <Card filmes={ranking} addFilmesSacola={addFilmesSacola}/>
            </div>
          </>
          }

          <h2>Filmes</h2>
          {carregando && <p className="loading">Carregando...</p>}
          {error && <p className="error">{error}</p>}
          <div className="container-filmes">
            <Card filmes={filmes} addFilmesSacola={addFilmesSacola} />
          </div>
        </div>

        <Bag filmes={sacola} addFilmesSacola={addFilmesSacola} total={total}/>
      </div>
    </div>
  )
}

export default App
