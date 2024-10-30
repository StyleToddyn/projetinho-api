function Content({ objeto}) {
  return (
    <>
      {objeto.map((conteudo) => {
        if (conteudo.edited == "Pokemon") {
          return (
            <div
              className="whitespace-nowrap m-5 p-5 rounded-lg shadow-[3px_3px_10px]"
              key={conteudo.created}
            >
              <ul>
                <li className="font-bold">Nome: {conteudo.name}</li>
                <li>Altura: {conteudo.height} cm</li>
                <li>Massa: {conteudo.mass} kg</li>
                <li>Cor do cabelo:{conteudo.hair_color}</li>
                <li>Cor da pele: {conteudo.eye_color}</li>
                <li>Ano de aniversário: {conteudo.birth_year} </li>
                <li>Gênero: {conteudo.gender}</li>
              </ul>
            </div>
          );
        } else if (conteudo.edited == "Nave pokemon") {
          return (
            <div
              className="whitespace-nowrap m-5 p-5 rounded-lg shadow-[3px_3px_10px]"
              key={conteudo.created}
            >
              <ul>
                <li className="font-bold">Nome: {conteudo.name}</li>
                <li>model: {conteudo.model} cm</li>
                <li>manufacturer: {conteudo.manufacturer} kg</li>
                <li>cost in credits:{conteudo.cost_in_credits}</li>
                <li>length: {conteudo.length}</li>
                <li>max atmosphering speed: {conteudo.max_atmosphering_speed} </li>
                <li>crew: {conteudo.crew}</li>
              </ul>
            </div>
          );
        }else if(conteudo.edited == "Planeta pokemon"){
          return (
            <div
              className="whitespace-nowrap m-5 p-5 rounded-lg shadow-[3px_3px_10px]"
              key={conteudo.created}
            >
              <ul>
                <li className="font-bold">Nome: {conteudo.name}</li>
                <li>rotation period: {conteudo.rotation_period} cm</li>
                <li>orbital period: {conteudo.orbital_period} kg</li>
                <li>diameter:{conteudo.diameter}</li>
                <li>climate: {conteudo.climate}</li>
                <li>gravity: {conteudo.gravity} </li>
                <li>terrain: {conteudo.terrain}</li>
              </ul>
            </div>
          );

        }
      })}
    </>
  );
}

export default Content;
