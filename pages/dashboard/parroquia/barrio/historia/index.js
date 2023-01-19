import { FormBarrioHistoria } from "../../../../../components/FormBarrioHistoria"

function index() {
  return (
    <>
      <div className=" grid place-items-center p-20">
        <div className="uppercase font-bold shadow ">
          Registro de historias de las barrio
        </div>
        <FormBarrioHistoria />
      </div>
    </>
  )
}

export default index
