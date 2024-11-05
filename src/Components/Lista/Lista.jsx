import { useRef } from "react"

function Lista({personagens,carregando,getStar,setPersonagens}) {

    const input = useRef("")

    const handleClick =  ()=>{
      const valorBusca = input.current.value;
      getStar(valorBusca);

      input.current.value = ""
    }


    return(
    <>
      <input className="border" type="text" placeholder="Faça sua pesquisa" ref={input}/>
      <button onClick={handleClick} >Busca</button>
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
    )
}

export default Lista