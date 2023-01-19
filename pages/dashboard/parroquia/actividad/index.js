import { FormActividad } from "../../../../components/FormActividad"

function index() {
  return (
    <>
      <div className=" grid place-items-center p-20">
        <div className="uppercase font-bold shadow ">
          Registro de actividades de las Parroquia
        </div>
        <FormActividad />
      </div>
    </>
  )
}

export default index
