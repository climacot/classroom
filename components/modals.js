import useModal from '../hooks/useModal'
import FormCreateCurse from './form/createCurse'
import FormInfoCreateCurse from './form/infoCreateCurse'

export default function Modals() {
  const { openModalCreate, openModalInfo } = useModal()

  return (
    <>
      {openModalCreate && (
        <div className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-black/50">
          <div className="border rounded-md max-w-lg mx-2 my-10 p-5 bg-white">
            <FormCreateCurse />
          </div>
        </div>
      )}
      {openModalInfo && (
        <div className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-black/50">
          <div className="border rounded-md max-w-lg mx-2 my-10 p-5 bg-white">
            <FormInfoCreateCurse />
          </div>
        </div>
      )}
    </>
  )
}
