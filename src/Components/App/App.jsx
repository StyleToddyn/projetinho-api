import { useState } from "react";
import Api from "../Api/Api";
import Content from "../Content/Content";
import Form from "../Form/Form";
function App() {
  const [personagem, setPersonagem] = useState("");
  const [objeto, setObjeto]= useState([]);
  const [nome, setNome] = useState(null);
  const [search, setSearch] = useState("");

  const handleCorpoChange = () => {
    setObjeto((prevState) => {
      const newId = Math.floor(Math.random() * 1000);
      return [...prevState, { ...personagem, created: newId, edited:search }];
    });
  };


  const removeLista = (id) =>{
    const newLista = [...objeto]
    const filteredLista = newLista.filter((personagem) => personagem.id !== id? personagem: null
    )
    setObjeto(filteredLista)
  }

  return (
    <>
      <h1 className="text-center m-2 text-3xl font-bold underline">
        Hello world!
      </h1>
      <Form setNome={setNome} objeto={handleCorpoChange} personagem={personagem} setSearch={setSearch} />
      <Api search={search} nome={nome} setPersonagem={setPersonagem} />
      <Content personagem={personagem} objeto={objeto} escolha={search}></Content>

       
    </>
  );
}

export default App;
