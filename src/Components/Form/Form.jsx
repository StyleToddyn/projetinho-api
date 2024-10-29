const Form = ({setNome}) => {
  return (
    <>
          <input type="search"  onKeyUp={(e)=> {setNome(e.target.value)} } placeholder="Faça sua pesquisa" />
    </>
  )
}

export default Form 