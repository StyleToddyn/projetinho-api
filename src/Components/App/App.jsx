import Lista from "../Lista/Lista";
import { useState,useEffect } from "react";

function App() {

  const [carregando, setCarregando] = useState(false);

  const [busca, setBusca] = useState();

  const [personagens, setPersonagens] = useState([]);


  const getStar = async (search,tipo) => {
    setCarregando(true);
    const resposta = await fetch(`https://swapi.dev/api/${tipo}/?search=${search}`);
    const dados = await resposta.json();
    setPersonagens((prevPersonagens) => [
      ...prevPersonagens,
      ...dados.results.map((personagem) => {
        return {
          Id: Math.floor(Math.random()*(100-0)),
          Nome:"Nome: " + personagem.name,
          //Personagem
          Altura:"Altura: " +  personagem.height,
          Massa:"Massa: " + personagem.mass,
          Cabelo: "Cor do cabelo: " + personagem.hair_color,
          Genero: "Gênero: " + personagem.gender,
          //Planeta
          Rotacao:"Rotação: " + personagem.rotation_period,
          Orbita: "Orbita: " + personagem.orbital_period ,
          Diametro: "Diametro: " + personagem.diameter,
          Clima: "Clima: " + personagem.climate,
          //Nave
          Modelo: "Modelo: " + personagem.model,
          Fabricante: "Fabricante: " + personagem.manufacturer,
          Comprimento: "Comprimento: " + personagem.length,
          Capacidade:"Capacidade: " + personagem.cargo_capacity,  

          URL:"URL: " + personagem.url

        };

      })
    ])
       setCarregando(false);
  };

   useEffect(() => {
     getStar(busca);
   }, []);

  return (
    <>

      <h1 className="text-center text-3xl font-bold underline">Hello world!</h1>
      <Lista  carregando={carregando} personagens={personagens} setPersonagens={setPersonagens} getStar={getStar}/>
    </>
  );
}

export default App;
