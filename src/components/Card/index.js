import './style.css'

function Card({ filmes, addFilmesSacola }) {
  return (
    <>
      {filmes.map((filme) => (
        <div
          className="card-movie"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.3) 100%, rgba(0, 0, 0, 0.3) 100%), url(${filme.poster_path}) no-repeat center / cover`,
          }}
          key={filme.id}
        >
          <div className="card-info">
            <h3>{filme.title}</h3>
            <div className="card-star">
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 0L7.95934 4.49139H12.6819L8.86126 7.26722L10.3206 11.7586L6.5 8.98278L2.6794 11.7586L4.13874 7.26722L0.318133 4.49139H5.04066L6.5 0Z"
                  fill="#FBCD6E"
                />
              </svg>
              {filme.vote_average}
            </div>
          </div>
          <button className="btn btn-roxo" onClick={() => addFilmesSacola(1, filme.id)}>
            Sacola <span>R$ {filme.price}</span>
          </button>
        </div>
      ))}
    </>
  )
}

export default Card
