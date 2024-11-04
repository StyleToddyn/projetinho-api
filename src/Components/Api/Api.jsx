import { useState, useEffect, useRef } from "react";
function Api() {
  const [carregando, setCarregando] = useState(false);

  const [busca, setBusca] = useState("Luke Skywalker");

  const [personagens, setPersonagens] = useState([]);

  const input = useRef("");

  useEffect(() => {
    const getStar = async (search) => {
      setCarregando(true);
      const resposta = await fetch(
        `https://swapi.dev/api/people/?search=${search}`
      );
      const dados = await resposta.json();
      setPersonagens(
        dados.results.map((personagem) => {
          return {
            nome: personagem.name,
            altura: personagem.height,
            massa: personagem.mass,
            URL: personagem.url,
          };
        })
      );
      setCarregando(false);
    };
    getStar(busca);
  }, []);

  return (
    <>
      <input
        className="border"
        type="text"
        placeholder="Faça sua pesquisa"
        ref={input}
      />
      <button
        onClick={() => {
          setBusca(input.current.value);
          getStar(busca);
        }}
      >
        Buscar
      </button>
      {carregando ? (
        <h4 className=" font-bold">carregando...</h4>
      ) : (
        <h4 className=" font-bold">personagens</h4>
      )}
      <ul className="">
        {personagens.map((personagem) => {
          return (
            <>
              <div className="box-border p-4 mb-4 border w-full">
                <li className="font-bold">Personagem: {personagem.nome}</li>
                <li>Altura: {personagem.altura}</li>
                <li>Peso: {personagem.massa}</li>
                <li>URL: {personagem.URL}</li>
              </div>
            </>
          );
        })}
      </ul>
    </>
  );
}
export default Api;
