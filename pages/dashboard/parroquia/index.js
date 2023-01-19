import { FormParroquia } from "../../../components/FormParroquia"

function index() {
  return (
    <>
      <div className=" w-screen h-screen grid place-items-center p-20 bg-slate-800">
        <div className="uppercase font-bold shadow text-orange-100">
          Registro de Parroquias
        </div>
        <FormParroquia />
      </div>
    </>
  )
}

export default index
