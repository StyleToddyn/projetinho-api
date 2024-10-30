const Form = ({ setNome, objeto, personagem, setSearch }) => {
  const handleSubmit = (e) => {
    objeto(personagem);
    e.preventDefault();
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input required
          type="search"
          onKeyUp={(e) => {
            setNome(e.target.value);
            
          }}
          placeholder="Faça sua pesquisa"
        />
        <select required onClick={(e) => setSearch(e.target.value)}>
          <option hidden value="">Escolha</option>
          <option value="Pokemon">Pokemon </option>
          <option value="Planeta pokemon">Planeta pokemon</option>
          <option value="Nave pokemon">Nave pokemon</option>
        </select>
        <button
          type="submit"
          className=" shadow"
        >
          Enviar
        </button>
      </form>
    </>
  );
};

export default Form;
