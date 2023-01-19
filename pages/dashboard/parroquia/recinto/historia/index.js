import { FormRecintoHistoria } from "../../../../../components/FormRecintoHistoria"

function index() {
  return (
    <>
      <div className=" grid place-items-center p-20">
        <div className="uppercase font-bold shadow ">
          Registro de historias del recinto
        </div>
        <FormRecintoHistoria />
      </div>
    </>
  )
}

export default index
