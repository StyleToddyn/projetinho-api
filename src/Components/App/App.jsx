import { useState } from "react";
import Lista from "../Lista/Lista";

function App() {
  const [carregando, setCarregando] = useState(false); 
  const [busca, setBusca] = useState(""); 
  const [dados, setDados] = useState({}); 
  const [tipo, setTipo] = useState("");

  const getStar = async (search, tipo) => {
    if (!search || !tipo) return; 

    setCarregando(true); 
    try {
     
      const resposta = await fetch(`https://swapi.dev/api/${tipo}/?search=${search}`);
      const json = await resposta.json();

      if (json.results) {
       
        setDados((prevDados) => ({
          ...prevDados,
          [tipo]: [
            ...(prevDados[tipo] || []),
            ...json.results
          ]
        }));
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setCarregando(false); 
    }
  };

  return (
    <div className="container">
      <h1 className="text-center text-3xl font-bold underline">Star Wars API</h1>
      {}
      <Lista 
        tipo={tipo} 
        carregando={carregando} 
        dados={dados} 
        setDados={setDados} 
        getStar={getStar} 
        setBusca={setBusca} 
        setTipo={setTipo} 
      />
    </div>
  );
}

export default App;
