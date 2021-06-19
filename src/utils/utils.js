export async function sortFilmesVoteAverage(a, b){
    return b.vote_average - a.vote_average;
}

export async function pesquisarFilmes(){
    //colocar o carregando aqui 
    //try catch aqui 
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
    
    return filmesFormatados
}
