import { useRef } from "react";

function Lista({ dados, carregando, getStar, setBusca, setTipo, tipo }) {
  const input = useRef("");
  const type = useRef(""); 

  const handleClick = () => {
    const valorBusca = input.current.value; 
    const valorTipo = type.current.value; 

    if (!valorBusca || !valorTipo) return; 

    setTipo(valorTipo); 
    setBusca(valorBusca); 
    getStar(valorBusca, valorTipo); 
    input.current.value = ""; 
  };

  return (
    <div>
      {}
      <input
        className="border"
        type="text"
        placeholder="Faça sua pesquisa"
        ref={input}
      />
      
      {}
      <select 
        ref={type} 
        value={tipo} 
        onChange={() => setTipo(type.current.value)} 
      >
        <option hidden value="">Escolha</option>
        <option value="people">Personagem</option>
        <option value="planets">Planeta</option>
        <option value="starships">Nave</option>
      </select>
      
      {}
      <button className="border" onClick={handleClick}>
        Buscar
      </button>

      {}
      {carregando ? (
        <h4 className="font-bold">Carregando...</h4>
      ) : (
        <h4 className="font-bold">{(tipo === "people")? "personagens" : (tipo === "starships")?"starships": "planets"  }</h4>
        
      )}
      
      {}
      {dados[tipo]?.length === 0 && !carregando && (
        <p className="font-bold">Nenhum resultado encontrado.</p>
      )}

      {}
      {dados[tipo]?.map((personagem) => (
        <div key={personagem.url} className="box-border p-4 mb-4 border w-full">
          <ul>
            <li className="font-bold">{personagem.name}</li>
            {tipo === "people" && (
              <>
                <li>Altura: {personagem.height}</li>
                <li>Massa: {personagem.mass}</li>
                <li>Cabelo: {personagem.hair_color}</li>
                <li>Gênero: {personagem.gender}</li>
              </>
            )}
            {tipo === "planets" && (
              <>
                <li>Rotação: {personagem.rotation_period}</li>
                <li>Órbita: {personagem.orbital_period}</li>
                <li>Diâmetro: {personagem.diameter}</li>
                <li>Clima: {personagem.climate}</li>
              </>
            )}
            {tipo === "starships" && (
              <>
                <li>Modelo: {personagem.model}</li>
                <li>Fabricante: {personagem.manufacturer}</li>
                <li>Comprimento: {personagem.length}</li>
                <li>Capacidade: {personagem.passengers}</li>
              </>
            )}
            <li>URL: {personagem.url}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Lista;
