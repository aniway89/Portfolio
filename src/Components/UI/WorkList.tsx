import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa"

function WorkList() {
  return (
    <div className="Work-card flex-col items-center  p-1.5 border gap-10">
      <img src="https://erito.netlify.app/assets/image%20(1).png" alt="" className="projectimg w-50" />
      <div className="info-of-the-project flex-col gap-10 items-baseline text-left ">
        <div className="title-of-theproject text-lg text-white font-semibold flex items-center justify-between gap-4">
          Tabby
          <div className="date text-xs text-color-grey-700">4 October 2025</div>
        </div>
        <div className="technology-used flex items-center gap-2 text-2xl text-gray-200 mt-4">
           <FaCss3Alt /><FaHtml5 /> <FaJsSquare /> <FaReact/>
        </div>
      </div>
    </div>
  )
}

export default WorkList
