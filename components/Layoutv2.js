import Sidebar from "../components/Sidebar"
export function Layoutv2({ children }) {
  return (
    <>
      <div className="w-screen flex">
        <Sidebar />
        <div className="bg-gray-100 mt-2 mr-1  h-full w-full">
          <div className="w-full h-full bg-blue-100 ">{children}</div>
        </div>
      </div>
    </>
  )
}

{
  /*container mx-auto h-full flex  */
}
