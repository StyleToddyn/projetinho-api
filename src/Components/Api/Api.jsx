import { useState } from "react";
export default function Api({ nome }) {
  const [personagem, setPersonagem] = useState("");

  let url = `https://swapi.dev/api/people/?search=${nome}`;
  const busca = (nome) => {
    fetch(url)
      .then((resposta) => {
        let contentType = resposta.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return resposta.json().then((json) => {
            if (json.results[0].name == nome) {
              setPersonagem(json.results[0]);
              console.log(json.results[0]);
            }
          });
        }
      })
      .catch((error) => {
        console.error("Erro na requisição" + error);
      });
  };
  return (
    <>
      {busca(nome)}
      <div className="max-w-2xl m-auto p-5 px-8 rounded-lg shadow-[3px_3px_10px]">
        <ul>
          <li>Nome: {personagem.name}</li>
          <li>Altura: {personagem.height} cm</li>
          <li>Massa: {personagem.mass} kg</li>
          <li>Cor do cabelo: {personagem.hair_color}</li>
          <li>Cor da pele: {personagem.eye_color}</li>
          <li>Ano de aniversário: {personagem.birth_year} </li>
          <li>Gênero: {personagem.gender}</li>
        </ul>
      </div>
    </>
  );
}
