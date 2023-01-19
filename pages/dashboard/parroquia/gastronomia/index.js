import { FormGastronomia } from "../../../../components/FormGastronomia"

function index() {
  return (
    <>
      <div className=" grid place-items-center p-20">
        <div className="uppercase font-bold shadow ">
          Registro de Gastronomia de Parroquias
        </div>
        <FormGastronomia />
      </div>
    </>
  )
}

export default index
