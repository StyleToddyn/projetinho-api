import { useState } from "react";
import Api from "../Api/Api";
import Content from "../Content/Content";
import Form from "../Form/Form";
import Modal from "../Modal/Modal";
function App() {
  const [nome, setNome] = useState(null);
  const [personagem, setPersonagem] = useState("");
  const [openModal, setOpenModal] = useState(false);


  return (
    <>
      <h1 className="text-center m-2 text-3xl font-bold underline">
        Hello world!
      </h1>
      <div className="max-w-2xl text-center m-auto p-5 px-8 shadow">
      <Api nome={nome} setPersonagem={setPersonagem} />
      <Form setNome={setNome} />
        <Modal
          lista={personagem}
          isOpen={openModal}
          isModalOpen={() => setOpenModal(!openModal)}>
          <Content personagem={personagem} />
        </Modal>


        <button
          className=" float-right box-border  p-1 rounded cursor-pointer opacity-80 duration-75 shadow-md"
          onClick={() => setOpenModal(true)}>
          {personagem.name}
        </button>
      </div>
    </>
  );
}

export default App;
