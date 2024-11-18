import { useRef } from "react";

function Lista({ personagens, carregando, getStar, setBusca, setTipo }) {
  const input = useRef("");
  const tipoRef = useRef("");

  const handleClick = () => {
    const valorBusca = input.current.value;
    const valorTipo = tipoRef.current.value;
    setTipo(valorTipo); 
    setBusca(valorBusca); 
    //getStar(valorBusca, valorType);
    input.current.value = "";
  };

  return (
    <>
      <input
        className="border"
        type="text"
        placeholder="Faça sua pesquisa"
        ref={input}
      />
      <select ref={tipoRef}>
        <option hidden value="">
          Escolha
        </option>
        <option value="people">Personagem</option>
        <option value="planets">Planeta</option>
        <option value="starships">Nave</option>
      </select>
      <button className="border" onClick={handleClick}>
        Busca
      </button>
      {carregando ? (
        <h4 className=" font-bold">carregando...</h4>
      ) : (
        <h4 className=" font-bold">personagens</h4>
      )}
      {personagens.map((personagem) => {
        if (type.current.value === "people") {
          return (
            <>
              <div
                key={personagem.url}
                className="box-border p-4 mb-4 border w-full"
              >
                <ul>
                  <li className="font-bold">{personagem.name}</li>
                  <li>Altura: {personagem.height}</li>
                  <li>Massa: {personagem.mass}</li>
                  <li>Cabelo: {personagem.hair_color}</li>
                  <li>Gênero: {personagem.gender}</li>
                  <li>URL: {personagem.url}</li>
                </ul>
              </div>
            </>
          );
        } else if (type.current.value === "planets") {
          return (
            <>
              <div
                key={personagem.url}
                className="box-border p-4 mb-4 border w-full"
              >
                <ul>
                  <li className="font-bold">{personagem.name}</li>
                  <li>Rotação: {personagem.rotation_period}</li>
                  <li>Órbita: {personagem.orbital_period}</li>
                  <li>Diâmetro: {personagem.diameter}</li>
                  <li>Clima: {personagem.climate}</li>
                  <li>URL: {personagem.url}</li>
                </ul>
              </div>
            </>
          );
        } else {
          return (
            <>
              <div
                key={personagem.url}
                className="box-border p-4 mb-4 border w-full">
                <ul>
                  <li className="font-bold">{personagem.name}</li>
                  <li>Modelo: {personagem.model}</li>
                  <li>Fabricante: {personagem.manufacturer}</li>
                  <li>Comprimento: {personagem.length}</li>
                  <li>Capacidade: {personagem.passengers}</li>
                  <li>URL: {personagem.url}</li>
                </ul>
              </div>
            </>
          );
        }
      })}
    </>
  );
}

export default Lista;
