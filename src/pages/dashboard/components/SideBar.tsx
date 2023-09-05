
import { Dialog } from "@headlessui/react"
import { skull } from "../../../assets"
import { Link } from "react-router-dom"
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai"
import Logout from "../../../features/Logout"


type Props = {
    open:boolean,
    setOpen:any
}

function SideBar({open,setOpen}: Props) {
const cookie = localStorage.getItem("cookie")
  return (
    <Dialog className={"lg:hidden"}  open={open} onClose={setOpen}>
        <Dialog.Overlay className={"fixed inset-0 bg-black/50 z-[60]"}/>
        <Dialog.Panel as="div" className={'w-72 shadow-2xl border-r-2 border-black fixed top-0 bottom-0 z-[60] bg-white'}>
           <div className="p-2 flex gap-x-2 items-center">
           <img src={skull} className="h-10 w-10" alt="" />
            <p className="text-2xl font-semibold">Pirates Guild</p>
           </div>
            <div className="border my-2 border-black" ></div>

            <div className="p-4 flex flex-col gap-y-8">
                <Link onClick={()=> setOpen(false)} className="flex items-center  justify-between border py-2.5 rounded-lg pl-2 pr-6 bg-red-500" to={"/guild/otp"}>
                <p className="text-2xl font-medium">OTP</p>
                 <span className="text-2xl">&#8594;</span>
                </Link>

                {/* <Link className="flex items-center  justify-between border py-2.5 rounded-lg pl-2 pr-6 bg-red-500" to={"guild/otp"}>
                <p className="text-2xl font-medium">Open Ticket</p>
                 <span className="text-2xl">&#8594;</span>
                </Link> */}

                <Link onClick={()=> setOpen(false)} className="flex items-center  justify-between border py-2.5 rounded-lg pl-2 pr-6 bg-red-500" to={"guild/orders"}>
                <p className="text-2xl font-medium">Order History</p>
                 <span className="text-2xl">&#8594;</span>
                </Link>

                <Link onClick={()=> setOpen(false)} className="flex items-center  justify-between border py-2.5 rounded-lg pl-2 pr-6 bg-red-500" to={"/reset"}>
                <p className="text-2xl font-medium">Reset Password</p>
                 <span className="text-2xl">&#8594;</span>
                </Link>

                {
                    cookie ? 
                    <div onClick={() => Logout()} className="mt-12 flex items-center gap-x-2">
                    <AiOutlineLogout size={60}/>
                    <p className="text-2xl font-semibold ">Logout</p>
                   </div>
                   :
                   <Link to={"/login"} className="mt-12 flex items-center gap-x-2">
                   <AiOutlineLogin size={60}/>
                   <p className="text-2xl font-semibold ">Login</p>
                  </Link>
                }
            </div>
        </Dialog.Panel>
    </Dialog>
  )
}

export default SideBar