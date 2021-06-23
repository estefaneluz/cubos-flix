import plusIcon from "../../assets/images/plus-icon.svg";
import minusIcon from "../../assets/images/minus-icon.svg";
import trashIcon from "../../assets/images/trash-icon.svg";
import "./style.css";

function ItemBag({ filme, addFilmesSacola }) {
  return (
    <div className="item-container">
      <img src={filme.poster_path} alt={`Poster do filme ${filme.title}`} />
      <p className="item-title">{filme.title}</p>
      <p>R$ {filme.price}</p>
      <div className="item-button">
        <button
          className="item-btn add"
          onClick={() => addFilmesSacola(1, filme.id)}
        >
          <img src={plusIcon} alt="Icone de adição na sacola" />
        </button>
        {filme.qtd_bag}
        <button
          className="item-btn minus"
          onClick={() => addFilmesSacola(-1, filme.id)}
        >
          {filme.qtd_bag === 1 && (
            <img src={trashIcon} alt="Icone de remover item da sacola" />
          )}
          {filme.qtd_bag > 1 && (
            <img src={minusIcon} alt="Icone de subtração na sacola" />
          )}
        </button>
      </div>
    </div>
  );
}

export default ItemBag;
