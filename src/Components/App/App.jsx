import Lista from "../Lista/Lista";
import { useState,useEffect } from "react";

function App() {

  const [carregando, setCarregando] = useState(false);

  const [busca, setBusca] = useState();

  const [personagens, setPersonagens] = useState([]);


  const getStar = async (search) => {
    setCarregando(true);
    const resposta = await fetch(`https://swapi.dev/api/people/?search=${search}`);
    const dados = await resposta.json();

    setPersonagens((prevPersonagens) => [
      ...prevPersonagens,
      ...dados.results.map((personagem) => {
        return {
          Id: Math.floor(Math.random()*(100-0)),
          nome: personagem.name,
          altura: personagem.height,
          massa: personagem.mass,
          URL: personagem.url,
        };

      })
    ])
      
      
      setCarregando(false);
      //setPersonagens((prevPersonagens) => [...prevPersonagens, personagens ]);
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
