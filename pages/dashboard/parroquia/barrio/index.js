import { FormBarrio } from "../../../../components/FormBarrio"

function index() {
  return (
    <>
      <div className=" grid place-items-center p-20">
        <div className="uppercase font-bold shadow ">Registro de Barrios</div>
        <FormBarrio />
      </div>
    </>
  )
}

export default index
