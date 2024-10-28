import { useState } from "react";
import Api from "../Api/Api";
function App() {
  const [nome, setNome] = useState(null)
  



  return (
    <>
      <h1 className="text-center m-2 text-3xl font-bold underline">Hello world!</h1>
      <div className="max-w-2xl text-center m-auto p-5 px-8 shadow" >
      <input type="text" className="border" onKeyUp={(e)=> {setNome(e.target.value)}} placeholder="Faça sua pesquisa" />
      </div>
    <Api nome={nome} />
    </>
  );
}

export default App;
