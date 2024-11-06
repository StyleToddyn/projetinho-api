import { useRef } from "react"

function Lista({personagens,carregando,getStar,setPersonagens}) {

    const input = useRef("")
    const type  = useRef("")
    

    const handleClick =  ()=>{
      const valorBusca = input.current.value;
      const valorType = type.current.value
      getStar(valorBusca,valorType);
      input.current.value = ""
    }


    return(
    <>
      <input className="border" type="text" placeholder="Faça sua pesquisa" ref={input}/>
      <select ref={type}>
      <option hidden value="">Escolha</option>
      <option value="people">Personagem</option>
      <option value="planets">Planeta</option>
        <option value="starships">Nave</option>
      </select>
      <button className="border" onClick={handleClick} >Busca</button>
      {(carregando) ? 
        <h4 className=" font-bold">carregando...</h4>
       : 
        <h4 className=" font-bold">personagens</h4>
      }
        {personagens.map((personagem) => {
          if(type.current.value ==="people"){
          return (
            <>
              <div key={personagem.Id} className="box-border p-4 mb-4 border w-full">
                <ul  >
                  <li  className="font-bold">{personagem.Nome}</li>
                  <li>{personagem.Altura}</li>
                  <li>{personagem.Massa}</li>
                  <li>{personagem.Cabelo}</li>
                  <li>{personagem.gender}</li>
                  <li>{personagem.URL}</li>                
                </ul>
              </div>
            </>
          );
        }else if(type.current.value ==="planets"){
          return (
            <>
              <div key={personagem.Id} className="box-border p-4 mb-4 border w-full">
                <ul  >
                  <li className="font-bold">{personagem.Nome}</li>
                  <li>{personagem.Rotacao}</li>
                  <li>{personagem.Orbita}</li>             
                  <li>{personagem.Diametro}</li>
                  <li>{personagem.Clima}</li>
                  <li>{personagem.URL}</li>   
                </ul>
              </div>
            </>
          );
        }
        else{
          return (
            <>
              <div key={personagem.Id} className="box-border p-4 mb-4 border w-full">
                <ul  >
                  <li className="font-bold">{personagem.Nome}</li>
                  <li>{personagem.Modelo}</li>
                  <li>{personagem.Fabricante}</li>
                  <li>{personagem.Comprimento}</li>
                  <li>{personagem.Capacidade}</li>
                  <li>{personagem.URL}</li>   
                </ul>
              </div>
            </>
          );          
        }
      })}
    </>
    )
}

export default Lista