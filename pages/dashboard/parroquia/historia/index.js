import { FormParroquiaHistoria } from "../../../../components/FormParroquiaHistoria"

function index() {
  return (
    <>
      <div className=" grid place-items-center p-20">
        <div className="uppercase font-bold shadow ">
          Registro de historias de las Parroquia
        </div>
        <FormParroquiaHistoria />
      </div>
    </>
  )
}

export default index
