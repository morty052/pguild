import { FaCircle } from "react-icons/fa"


type Props = {
  title:string,
  snippet:string,
  // time:string,
  func?:any,
  unread:any,
  setmobile:any
}

const Message = ({title, snippet,  func,unread, setmobile}:Props) => {

  return (
   <>
   
   <div className="sm:hidden" onClick={setmobile}>
        <div className={"flex gap-x-2 items-center py-2 cursor-pointer hover:bg-gray-200"} >
             <FaCircle className={`text-[8px] ${unread ? "text-blue-500" : "text-gray-200"}`}/>
             <div className="flex flex-col px-2 sm:px-4">
                <p className={`font-medium  ${unread ? "text-blue-600" : "text-gray-700"}`}>{title}</p>
                <span className=" text-sm whitespace-normal ">{snippet}</span>
                {/* <span className="text-xs text-gray-700">10 minutes ago</span> */}
             </div>
           </div>
   </div>


   {/* LARGE SCREEN MESSAGE */}
   <div onClick={func}>
        <div className={"hidden sm:flex gap-x-2 items-center py-2 cursor-pointer hover:bg-gray-200"} >
             <FaCircle className={`text-[8px] ${unread ? "text-blue-500" : "text-gray-200"}`}/>
             <div className="flex flex-col px-2 sm:px-4">
                <p className={`font-medium  ${unread ? "text-blue-600" : "text-gray-700"}`}>{title}</p>
                <span className=" text-sm whitespace-normal ">{snippet}</span>
                {/* <span className="text-xs text-gray-700">10 minutes ago</span> */}
             </div>
           </div>
   </div>
   </>
  )
}

export default Message