import Lista from "../Lista/Lista";
import { useState,useEffect } from "react";

function App() {

  const [carregando, setCarregando] = useState(false);
  const [busca, setBusca] = useState("");
  const [personagens, setPersonagens] = useState([]);
  const [tipo, setTipo] = useState(""); 


  const getStar = async (search,tipo) => {
    setCarregando(true);
    const resposta = await fetch(`https://swapi.dev/api/${tipo}/?search=${search}`);
    const json = await resposta.json();

    if (json.results) {
      setPersonagens((prevPersonagens) => [
        ...prevPersonagens,
        ...json.results
      ]);
    }
    setCarregando(false);
  };

  useEffect(() => {
    if (busca && tipo) {
      getStar(busca, tipo);
    }
  }, [busca, tipo]);
  return (
    <>

      <h1 className="text-center text-3xl font-bold underline">Hello world!</h1>
      <Lista  carregando={carregando} personagens={personagens} setPersonagens={setPersonagens} getStar={getStar} setBusca={setBusca} setTipo={setTipo}/>
    </>
  );
}

export default App;
