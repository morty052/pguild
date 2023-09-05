import { skull } from "../../assets"
// import {FaUser} from "react-icons/fa"
import { AiOutlineMenu} from "react-icons/ai"
import ProductsSearchInput from "../ProductsSearchInput"
import useFetch from "../../hooks/useFetch"
import { Link, useLocation } from "react-router-dom"
import Logout from "../../features/Logout"


type props = {
     open:boolean,
     setOpen:any
}

function Navbar({open, setOpen}:props) {

    const path = useLocation().pathname
    const cookie = localStorage.getItem("cookie")
    const {data, loading} = useFetch(`*[_type == "product"]`)
    

    

    if (loading) {
        return null
       }
       
       
          
        const product =  data ? data : []
        console.log(product)
        // if (!product) {
        //     return null
        // }

    return(
      <>
      <div className="fixed top-0 inset-x-0 bg-light-1 z-50">
         <div className="flex items-center justify-between px-2 py-2.5 max-w-7xl lg:px-8">

            {/* BRAND */}
           <Link to={"/guild"} className="flex items-center gap-x-2 sm:gap-x-4 cursor-pointer">
            <img src={skull} className="w-10 h-10" alt="" />
            <h3 className="font-black hidden md:block sm:text-3xl sm:tracking-wide">Pirates Guild</h3>
           </Link>

           {/* INPUT */}
           <div className="  mx-6 rounded-xl flex flex-1 justify-center items-center max-w-lg">
             {/* <input placeholder="Search Products"  className=" flex-1 focus:outline-none text-center sm:w-72  " type="text" /> */}
             <ProductsSearchInput products={product}/>
           </div>

           {/* BUTTONS */}
            {
                cookie ?
            <div className="hidden md:flex gap-x-4">
              { !path.includes("orders") ?
              <Link to={"/guild/orders"}>
               <button className="hidden sm:block w-24 bg-purple-500 px-4 py-2 rounded-lg">
                    Orders
               </button>
                </Link>
                :
                <Link to={"/guild"}>
               <button className="hidden sm:block w-24 bg-purple-500 px-4 py-2 rounded-lg">
                    Products
               </button>
                </Link>
                }
               {!path.includes("otp") ?
               <Link to={"/guild/otp"}>
               <button className="hidden sm:block w-24 bg-purple-500 px-4 py-2 rounded-lg">
                    OTP
               </button>
                </Link>
               :
               <Link to={"/guild"}>
               <button className="hidden sm:block w-24 bg-purple-500 px-4 py-2 rounded-lg">
                    Products
               </button>
                </Link>
                }
            <button onClick={() => Logout()} className="hidden sm:block w-24 bg-red-500 px-4 py-2 rounded-lg">Log Out</button>
            </div>
            :
            <div className="hidden md:flex gap-x-4">

            <Link to={"/login"}>
               <button className="hidden sm:block w-24 bg-purple-500 px-4 py-2 rounded-lg">
                    Login
               </button>
             </Link>
            <Link to={"/reset"}>
               <button className="hidden sm:block  bg-red-500 px-4 py-2 rounded-lg">
                    Reset Password
               </button>
             </Link>
            </div>
            }

            <div  className="md:hidden w-fit">
               { !open && 
                <AiOutlineMenu onClick={setOpen}/>
               }
            </div>
         </div>
      </div>
      </>
    )
  }

  export default  Navbar