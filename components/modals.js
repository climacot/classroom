import FormCreateCurse from './form/createCurse'
import FormInfoCreateCurse from './form/infoCreateCurse'
import useModal from '../hooks/useModal'

export default function Modals() {
  const { openModalCreate, openModalInfo } = useModal()

  return (
    <>
      {openModalCreate && (
        <div className="absolute top-0 flex justify-center items-center w-full h-screen bg-black/50">
          <div className="border rounded-md m-5 p-5 bg-white max-w-xl w-full">
            <FormCreateCurse />
          </div>
        </div>
      )}
      {openModalInfo && (
        <div className="absolute top-0 flex justify-center items-center min-h-full min-w-full bg-black/50">
          <div className="border rounded-md max-w-lg m-5 p-5 bg-white">
            <FormInfoCreateCurse />
          </div>
        </div>
      )}
    </>
  )
}
