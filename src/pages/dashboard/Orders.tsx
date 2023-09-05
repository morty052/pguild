import useFetch from "../../hooks/useFetch"
import { twitter, FB, ID_ME, IG, Linkedin, indeed, cam } from "../../assets"
import { day } from "../../lib/dayjs"
import { Empty } from "antd"
import { PendingPaymentModal } from "../../components"
import { useState } from "react"


type order = {
    name:string | undefined,
    price:string | undefined,
    created:string | undefined,
    type:string | undefined,
    product?:{
    name:string,
    price:string,
    created:string,
    type:string,
    }
    
}

function Orders() {

    const id = localStorage.getItem("cookie")
    
    const {data, loading} = useFetch(`*[_type == "users" && _id == "${id}"]{orders[]{...,product -> {...}}}`)
    const [isOpen, setIsOpen] = useState(false)
    
    function OrderItem({created, name, price, type}:order) {

        
        
        const createdAt = created;
        const parsedCreatedAt = day(createdAt).format('DD/MM/YYYY');
        // const timeAgo = parsedCreatedAt?.fromNow();

      return(
        <div  className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
          <div className="pb-4 md:pb-8 w-full md:w-40">
            {/* <img className="w-full hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" /> */}
            {/* <img className="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" /> */}
            <div className="w-full hidden md:block ">
                <Setimage type={`${type}`}/>
            </div>
            <div className="w-full md:hidden ">
               <Setimage type={`${type}`}/>
            </div>
          </div>
          <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
            <div className="w-full flex flex-col justify-start items-start space-y-8">
              <h3 className="text-xl  xl:text-2xl font-semibold leading-6 text-gray-800">{name}</h3>
              <div className="flex  flex-col space-y-2  w-full max-w-sm">
                
                <div className="flex items-center justify-between  w-full">
                <p className=" ">login Email: </p> 
                <p onClick={() => setIsOpen(true)}  className="  text-gray-800 cursor-pointer"> click to reveal</p>
                </div>
                <div className="flex items-center justify-between  w-full">
                <p className=" ">login Password: </p> 
                <p onClick={() => setIsOpen(true)}  className="  text-gray-800 cursor-pointer"> click to reveal</p>
                </div>
                <div className="flex items-center justify-between  w-full">
                <p className=" ">Order Date: </p> 
                <p className="  text-gray-800"> {parsedCreatedAt} </p>
                </div>
                <div className="flex items-center justify-between  w-full">
                <p className=" ">Status: </p> 
                <p className="  text-gray-800"> Pending Confirmation</p>
                </div>


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

            <div className="flex justify-between space-x-8 items-start w-full">
              <p className="text-xl  xl:text-2xl font-semibold leading-6 text-gray-800">${price} </p>
            </div>
          </div>
        </div>
      )  
    }

    if (loading) {
       return null 
    }

           
    const orders = data ? data?.[0]?.orders : []

    if (orders?.length < 1) {
        return <Empty/>
    }

    type image = {
      type:string
    }

    function Setimage({type}:image) {
        
      let image:any

        switch (true) {
          case type?.toLowerCase().includes("twitter"): 
              console.log("this is the type", type)
              image =  <img className="h-10 w-10 sm:h-14 sm:w-14" src={twitter} alt="" />
              break;
      
          case type?.toLowerCase().includes("facebook"): 
              console.log("this is the type", type)
              image = <img className="h-10 w-10 sm:h-14 sm:w-14" src={FB} alt="" />
              break;
      
          case type?.toLowerCase().includes("idme"): 
              console.log("this is the type", type)
               image =  <img className="h-10 w-10 sm:h-14 sm:w-14" src={ID_ME} alt="" />
              break;
      
          case type?.toLowerCase().includes("instagram"): 
              console.log("this is the type", type)
              image =  <img className="h-10 w-10 sm:h-14 sm:w-14" src={IG} alt="" />
              break;
      
          case type?.toLowerCase().includes("linkedin"): 
              console.log("this is the type", type)
              image =  <img className="h-10 w-10 sm:h-14 sm:w-14" src={Linkedin} alt="" />
              break;

          case type?.toLowerCase().includes("indeed"): 
              console.log("this is the type", type)
              image =  <img className="h-10 w-10 sm:h-14 sm:w-14" src={indeed} alt="" />
              break;

          case type?.toLowerCase().includes("cam"): 
              console.log("this is the type", type)
              image =  <img className="h-10 w-10 sm:h-14 sm:w-14" src={cam} alt="" />
              break;
       
          default:
              break;
       }
      
       return image
       }

  return (
    // <!-- component -->
<div className="py-20 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
  

  <div className="flex justify-start item-start space-y-2 flex-col">
    <h1 className="text-3xl  lg:text-4xl font-semibold leading-7 lg:leading-9 text-light text-center">All Orders</h1>
    <p className="text-base -300 font-medium leading-6 text-light text-center">21st Mart 2021 at 10:34 PM</p>
  </div>
  <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">

        {/* ORDERS */}
      <div className="flex flex-col justify-start items-start rounded-md  bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full max-w-5xl mx-auto">
        {/* <p className="text-lg md:text-xl  font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p> */}

        {orders?.length > 0 ?
            orders?.map((order:order,index:number)=>(
            <OrderItem
            key={index}
             name={order?.product?.name}
             price={order?.product?.price}
             type={order?.product?.type}
             created={order?.product?.created}
            />
            ))

            :
            <div className="flex w-full justify-center">
                <Empty
                 description="No orders yet"/>
            </div>
        }
      </div>
    </div>
  </div>
  <PendingPaymentModal isOpen={isOpen} setIsOpen={setIsOpen}/>
</div>
  )
}

export default Orders