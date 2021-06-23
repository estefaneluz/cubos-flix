import './style.css'
import personIllustration from '../../assets/images/person-illustration.svg'
import ItemBag from '../ItemBag'

function Bag({filmes, addFilmesSacola, total, setShowSacola, showSacola}){
    return(
        <div className="bag-container">
            <div className="bag-title" onClick={() => setShowSacola(!showSacola)}>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.7348 35.8354L11.0955 30.2701C7.55479 28.2259 5.57683 25.3787 9.32017 20.6769L14.246 14.2198C16.2045 11.9261 18.4102 11.889 19.8477 12.7189L31.6008 19.5046C33.0593 20.3467 33.9922 22.2945 33.1017 25.1062L29.9727 32.6006C27.9918 37.5449 24.2755 37.8796 20.7348 35.8354Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path opacity="0.4" d="M30.8278 18.72C32.4185 15.9648 31.4745 12.4417 28.7193 10.851V10.851C27.3958 10.0794 25.8194 9.86674 24.3388 10.2601C22.8582 10.6535 21.5952 11.6205 20.8292 12.9473V12.9473" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M26.261 23.0168L26.2082 22.9863" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.5286 19.1296L19.4757 19.0991" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h2>Sacola</h2>
            </div>
            <div className={`bag-content ${showSacola ? 'show' : ''}`}>
                {filmes.length === 0 && 
                    <>
                        <h2>Sua sacola está vazia</h2>
                        <p>Adicione filmes agora</p>
                        <img src={personIllustration} alt="Ilustração de uma pessoa se enconstado em um celular com o logo da Cubos Flix" /> 
                    </>
                }
                {filmes.length > 0 &&
                    <>
                        {filmes.map(filme => (<ItemBag key={filme.id} filme={filme} addFilmesSacola={addFilmesSacola}/>))}
                        <button className="btn btn-rosa">Confirme os seus dados <span>R$ {total}</span></button>
                    </>
                }
            </div>
        </div>
    )
}

export default Bag