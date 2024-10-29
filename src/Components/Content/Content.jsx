
function Content({personagem}) {
  return (
    <div className="max-w-2xl m-auto p-5 px-8 rounded-lg shadow-[3px_3px_10px]">
        <ul>
          <li className="font-bold">Nome: {personagem.name}</li>
          <li>Altura: {personagem.height} cm</li>
          <li>Massa: {personagem.mass} kg</li>
          <li>Cor do cabelo:{personagem.hair_color}</li>
          <li>Cor da pele: {personagem.eye_color}</li>
          <li>Ano de aniversário: {personagem.birth_year} </li>
          <li>Gênero: {personagem.gender}</li>
        </ul>
      </div>
  )
}

export default Content