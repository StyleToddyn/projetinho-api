export default function Api({ nome,setPersonagem }) {

  let url = `https://swapi.dev/api/people/?search=${nome}`;
  const busca = (nome) => {
    fetch(url)
      .then((resposta) => {
        let contentType = resposta.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return resposta.json().then((json) => {
            if (json.results[0].name == nome) {
              setPersonagem(json.results[0]);

            }
          });
        }
      })
      .catch((error) => {
        console.error("Erro na requisição" + error);
      });
  };
  return (busca(nome));
}
