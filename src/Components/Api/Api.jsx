import { useState, useEffect, useRef } from "react";
function Api() {
  const [carregando, setCarregando] = useState(false);

  const [busca, setBusca] = useState();

  const [personagens, setPersonagens] = useState([]);

  const input = useRef("");

  const getStar = async (search) => {
    setCarregando(true);
    const resposta = await fetch(`https://swapi.dev/api/people/?search=${search}`);
    const dados = await resposta.json();
    setPersonagens(dados.results.map((personagem) => {
        return {
          Id: Math.floor(Math.random()*(100-0)),
          nome: personagem.name,
          altura: personagem.height,
          massa: personagem.mass,
          URL: personagem.url,
        };
      }));
    setCarregando(false);
  };
  


   useEffect(() => {
     getStar(busca);
   }, []);

  const handleClick = ()=>{
    const valorBusca = input.current.value;
    getStar(valorBusca)
    console.log(valorBusca)
  }

  

  return (
    <>
      <input className="border" type="text" placeholder="Faça sua pesquisa" ref={input}/>
      <button onClick={handleClick}>Busca</button>
      {(carregando) ? 
        <h4 className=" font-bold">carregando...</h4>
       : 
        <h4 className=" font-bold">personagens</h4>
      }
        {personagens.map((personagem) => {
          return (
            <>
              <div className="box-border p-4 mb-4 border w-full">
                <ul key={personagem.Id} >
                  <li  className="font-bold">Personagem: {personagem.nome}</li>
                  <li>Altura: {personagem.altura}</li>
                  <li>Peso: {personagem.massa}</li>
                  <li>URL: {personagem.URL}</li>
                </ul>
              </div>
            </>
          );
        })}
    </>
  );
}
export default Api;
