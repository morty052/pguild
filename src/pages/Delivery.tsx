import { useParams, useSearchParams } from "react-router-dom"
import { cam, indeed, skull } from "../assets"
import useFetch from "../hooks/useFetch"
import { twitter, FB, ID_ME, IG, Linkedin, } from "../assets"
// import createOrder from "../features/createOrder"
import { clock } from "../assets"
import { useState } from "react"
import { PendingPaymentModal } from "../components"



function Delivery() {

    const [isOpen, setIsOpen] = useState(false)
    const id = useParams().id

    const [searchParams,] = useSearchParams()

     const type = searchParams.get('type')
    
     

     const {data} = useFetch(`*[_type == "product" && _id == "${id}"]`)
     const product = data ? data[0] : []
     let image

    //  const [order, setorder] = useState()


     if (!data) {
       return null 
     }

     switch (true) {
        case type?.toLowerCase().includes("twitter"): 
            image = twitter
            break;

        case type?.toLowerCase().includes("facebook"): 
            image = FB
            break;

        case type?.toLowerCase().includes("idme"): 
            image = ID_ME
            break;

        case type?.toLowerCase().includes("instagram"): 
            image = IG
            break;

        case type?.toLowerCase().includes("linkedin"): 
            image = Linkedin
            break;

        case type?.toLowerCase().includes("indeed"): 
            image = indeed
            break;

        case type?.toLowerCase().includes("cam"): 

            image = cam
            break;
     
        default:
            break;
     }


    //  function handleCreate() {
    //   createOrder(product._id,`${type}`)
      
    //  }

    

    return (
        <div>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
      <a className="text-2xl font-bold text-gray-800 flex items-center gap-x-4">
        <img src={skull} alt="" className="w-10 h-10" />
        <p>Pirates Guild</p>
     </a>
      <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
        <div className="relative">
            {/* STEPS */}
          <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
            {/* <li className="flex items-center space-x-3 text-left sm:space-x-4">
              <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" 
                >
               <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" >1</a>
              </a>
              <span className="font-semibold text-gray-900">Payment</span>
            </li> */}
                   {/* <li className="flex items-center space-x-3 text-left sm:space-x-4">
              <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" >1</a>
              <span className="font-semibold text-gray-900">Payment</span>
            </li> */}
            <li className="flex items-center space-x-3 text-left sm:space-x-4">
              <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" 
                >
               <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" >1</a>
              </a>
              <span className="font-semibold text-gray-900">Payment</span>
            </li>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
              <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" >2</a>
              <span className="font-semibold text-gray-900">Confirmation</span>
            </li>
     
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <li className="flex items-center space-x-3 text-left sm:space-x-4">
              <a className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" >3</a>
              <span className="font-semibold text-gray-500">Test</span>
            </li>
          </ul>
    
        </div>
      </div>
    </div>
    <div className="grid sm:px-10 md:grid-cols-2 lg:px-20 xl:px-32">
        {/* ORDER SUMMARY */}
      <div className="px-4 pt-8">
        <p className="text-xl font-medium">Order Details</p>
        <p className="text-gray-400">After Payment confirmation you can find login information or activation code for your product from the orders page or clicking below.</p>
        <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
          <div className="flex flex-col rounded-lg bg-white sm:flex-row">
            <img className="m-2 h-24 w-28 rounded-md border object-contain object-center" src={image} alt="" />
            <div className="flex w-full flex-col">

            <div className="flex w-full flex-col px-4 pt-4">
              <span className="font-semibold">{product?.name}</span>
              <span className="float-right text-gray-400">{product?.type}</span>
              <p className="text-lg font-bold">${product?.price}</p>
            </div>
            
            <div className="flex w-full flex-col px-4 mt-1">
              <span className="font-semibold">Login Information</span>
              
             <div className="flex space-y-1  w-full flex-col">
                {
              !type?.toLowerCase().includes("cam") &&
             <div className="flex justify-between">
              <span className=" text-gray-400">Login Email</span>
              <p onClick={() => setIsOpen(true)}  className=" cursor-pointer ">Click to reveal</p>
              </div>
                }

{
              !type?.toLowerCase().includes("cam") &&
              <div className="flex justify-between">
              <span className=" text-gray-400">Login Password</span>
              <p onClick={() => setIsOpen(true)}  className=" cursor-pointer ">Click to reveal</p>
              </div>
}

             {
                type?.toLowerCase().includes("idme") &&
                 <div className="flex justify-between">
                 <span className=" text-gray-400">User Info PDF</span>
                 <p onClick={() => setIsOpen(true)} className=" font-bold text-blue-700 cursor-pointer">Download</p>
                 </div>
             }
             {
                type?.toLowerCase().includes("cam") &&
                <>
                 <div className="flex justify-between">
                 <span className=" text-gray-400">Cam.zip </span>
                 <p onClick={() => setIsOpen(true)} className="font-bold text-blue-700 cursor-pointer  ">Download</p>
                 </div>
                 <div className="flex justify-between">
                 <span className=" text-gray-400">Pirate Guild Cam exe</span>
                 <p onClick={() => setIsOpen(true)}  className="font-bold text-blue-700 cursor-pointer  ">Download</p>
                 </div>
                </>
             }
             </div>
            </div>

            </div>
          </div>
        </div>
    
     
      </div>
    
      {/* Payment Details */}
      <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
        <p className="text-xl font-medium">Confirmation Details</p>
        <p className="text-gray-400"> Payment will be confirmed after a few minutes, if you clicked confirm order before sending the full amount cancel order and try again </p>
        <div className="">
       
          <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">Confirmation Status</label>
          <div className="flex flex-col sm:flex-row">
              <img src={clock} className="h-8 w-8 sm:hidden" alt="" />
            <div className="relative flex gap-x-4 items-center flex-shrink-0 sm:w-7/12">
            <img src={clock} className="h-8 w-8 hidden sm:block animate-pulse" alt="" />
              <p className=" animate-pulse text-red-300">
               Payment Pending Confirmation
              </p>
            </div>
          </div>
    
          {/* <!-- Total --> */}
    
          {/* <div className="mt-6 flex items-center justify-between">
            <p className="text-xl font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900">${product?.price}</p>
          </div> */}
        </div>
    
        {/* Buttons */}
        <div className="flex flex-col">
    
        <button onClick={()=> window.location.replace("/guild/orders")} className="mt-4  w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">View your orders</button>
        <button onClick={() => window.location.replace("/guild")} className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Cancel Order</button>
        </div>
      </div>
    </div>
    <PendingPaymentModal isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
      )
}

export default Delivery