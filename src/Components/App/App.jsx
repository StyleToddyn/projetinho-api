import { useState } from "react";
import Api from "../Api/Api";
function App() {
  const [nome, setNome] = useState(null)



  return (
    <>
      <h1 className="text-center m-2 text-3xl font-bold underline">Hello world!</h1>
      <input type="text" className="border" onChange={(e)=> {setNome(e.target.value)}} />
    <Api nome={nome}/>
    </>
  );
}

export default App;
