import './style.css'
import '../../App.css'

function Card() {
  return (
    <div className="card-movie">
      <div className="card-info">
        <h3>Cruella</h3>
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
          6.5
        </div>
      </div>
      <button>
        Sacola <span>R$ 9,5</span>
      </button>
    </div>
  )
}

export default Card
