const Modal = ({isOpen,isModalOpen, children, lista}) => {
    if (isOpen) {
        return (
      
          <>
            <div className="fixed top-0 right-0 left-0 bottom-0 bg-slate-100   z-[1000]"> 
              <div className="fixed top-1/2 left-1/2 p-40 -translate-x-1/2 -translate-y-1/2 bg-gray- rounded-xl">
                {children}
                  <button onClick={isModalOpen} className="bg-slate-500 p-2 float-right rounded-xl cursor-pointer m-5">Fechar</button>
              </div>
            </div>
          </>
        );
      }
}

export default Modal