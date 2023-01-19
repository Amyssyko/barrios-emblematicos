import { FormRecinto } from "../../../../components/FormRecinto"

function index() {
  return (
    <>
      <div className=" grid place-items-center p-20">
        <div className="uppercase font-bold shadow ">Registro de Recintos</div>
        <FormRecinto />
      </div>
    </>
  )
}

export default index
