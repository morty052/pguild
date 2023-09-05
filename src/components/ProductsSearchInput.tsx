import { AiOutlineSearch } from "react-icons/ai"
import { Combobox } from "@headlessui/react"
import { useState } from "react"
import { twitter, FB, ID_ME, IG, Linkedin } from "../assets"
import { Link } from "react-router-dom"
import { Any } from "@sanity/client"

const ProductsSearchInput = ({products}:any) => {

const [query, setQuery] = useState("")

const filteredProducts = query ? products?.filter((product:Any) => {
    return product.name.toLowerCase().includes(query.toLowerCase())
}) 
: []


type props = {
  type:string
}

 function Setimage({type}:props) {
  let image:any
  switch (true) {
    case type?.toLowerCase().includes("twitter"): 
        console.log("this is the type", type)
        image =  <img className="h-10 w-10 sm:h-14 sm:w-14" src={twitter} alt="" />
        break;

    case type?.toLowerCase().includes("facebook"): 
        console.log("this is the type", type)
        image = image =  <img className="h-10 w-10 sm:h-14 sm:w-14" src={FB} alt="" />
        break;

    case type?.toLowerCase().includes("idme"): 
        console.log("this is the type", type)
        image = image =  <img className="h-10 w-10 sm:h-14 sm:w-14" src={ID_ME} alt="" />
        break;

    case type?.toLowerCase().includes("instagram"): 
        console.log("this is the type", type)
        image = image =  <img className="h-10 w-10 sm:h-14 sm:w-14" src={IG} alt="" />
        break;

    case type?.toLowerCase().includes("linkedin"): 
        console.log("this is the type", type)
        image = image =  <img className="h-10 w-10 sm:h-14 sm:w-14" src={Linkedin} alt="" />
        break;
 
    default:
        break;
 }

 return image
 }


  return (
    <Combobox className={'relative w-full sm:min-w-[500px] md:min-w-[600px]'} as={"div"} >
     <div className="flex gap-x-2 items-center py-[2px]  pr-2.5 border border-black  rounded-3xl relative">
    <Combobox.Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search products' className='border-0 focus:outline-none focus:ring-0 px-2 bg-transparent   py-2 w-full text-center   '/>
     <AiOutlineSearch className='text-xl text-gray-800'/>
     </div>
    <Combobox.Options  className={'absolute mt-1 rounded-md bg-white shadow-sm grid gap-y-4  p-4 left-0 right-0 max-h-64 overflow-hidden'}>
         {
            filteredProducts.length > 0 ? 
            filteredProducts?.map((product:any, index:number)=>(
              <Combobox.Options className={"bg-gray-200/40 px-4 py-1 rounded-2xl"} key={index}>
                <Link to={`guild/product/${product._id}/?type=${product?.type}`}  className="flex items-center gap-x-4 ">
                {<Setimage type={product?.type}/>}
                <span className=" font-medium text-sm sm:text-base">
                {product.name}
                </span>
               </Link>
              </Combobox.Options>
          ))
          :
          <p className="text-center">
            No items match your search
          </p>
         }
    </Combobox.Options>
    </Combobox>
  )
}

export default ProductsSearchInput