import ProductNames from "../../constants/productNames"
import { ProductTab } from "./components"
import useFetch from "../../hooks/useFetch"
import {useSearchParams} from "react-router-dom"


type product = {
  name?:string,
  type:string,
  _id:string,
  refunds:boolean,
  price:string,
  topseller:boolean,
  discount:boolean
}

function DashBoardHome() {

    const [searchParams, setSearchParams] = useSearchParams()

    const type = searchParams.get('type')
    const {data:products, loading} = useFetch(`*[_type == "product"]`)

    const TopSellers = () => {
      return(
      <div className="py-8 max-w-5xl mx-auto">
        <h3 className=" sm:text-center text-light text-3xl font-semibold sm: sm:text-5xl ">
          Top Sellers
        </h3>
        <table className="w-full mt-8  ">
          <thead className="bg-white ">
            <tr className="divide-x-2 ">
              <th className="w-1/2 sm:w-auto ">
                <td className="pl-2">Name</td>
              </th>

              <th>
                <td className="pl-2">price</td>
              </th>
              {/* <th>
                       <td className="">
                       status
                       </td>
             </th> */}
              <th>
                <td className="pl-2">refunds</td>
              </th>
            </tr>
          </thead>
          <tbody>
            {top.map((i:product, index: number) => (
              <tr
                onClick={() =>
                  window.location.assign(`guild/product/${i._id}?type=${i.type}`)
                }
                key={index}
                className=" group cursor-pointer overflow-scroll divide-x-2 divide-y-2 bg-green-300 hover:bg-white  px-4"
              >
                <td className="text-xs  h-14 pl-2 w-28  border-2  sm:text-lg font-semibold">{i.name}</td>
                <td className="text-xs  h-14 pl-2 w-28 sm:text-lg font-semibold">$ {i.price}</td>
                {/* <td className="text-xs sm:text-base w-28">{i.verified ? "Verified" : "Unverified"}</td> */}
                <td className="text-xs  h-14 pl-2 w-28 sm:text-lg font-semibold">{i.refunds ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      )
    }

    const Discounts = () => {
      return(
        <div className="py-8 max-w-5xl mx-auto">
          <h3 className=" sm:text-center text-light text-3xl font-semibold sm: sm:text-5xl ">
            Discount Products
          </h3>
          <table className="w-full mt-8  ">
            <thead className="bg-white ">
              <tr className="divide-x-2 ">
                <th className="w-1/2 sm:w-auto ">
                  <td className="pl-2">Name</td>
                </th>
  
                <th>
                  <td className="pl-2">price</td>
                </th>
                {/* <th>
                         <td className="">
                         status
                         </td>
               </th> */}
                <th>
                  <td className="pl-2">refunds</td>
                </th>
              </tr>
            </thead>
            <tbody>
              {discount?.map((i:product, index: number) => (
                <tr
                  onClick={() =>
                    window.location.assign(`guild/product/${i._id}?type=${i.type}`)
                  }
                  key={index}
                  className=" group cursor-pointer overflow-scroll divide-x-2 divide-y-2 bg-green-300 hover:bg-white  px-4"
                >
                  <td className="text-xs  h-14 pl-2 w-28  border-2  sm:text-lg font-semibold">{i.name}</td>
                  <td className="text-xs  h-14 pl-2 w-28 sm:text-lg font-semibold">$ {i.price}</td>
                  {/* <td className="text-xs sm:text-base w-28">{i.verified ? "Verified" : "Unverified"}</td> */}
                  <td className="text-xs  h-14 pl-2 w-28 sm:text-lg font-semibold">{i.refunds ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
  
        </div>
        )
    }

    const ProductTable = () => {
      return(
        <div className="py-8 max-w-5xl mx-auto">
          <h3 className=" sm:text-center text-light text-3xl font-semibold sm: sm:text-5xl first-letter:uppercase ">
            {type} Products
          </h3>
          <p className="mt-2 sm:text-center text-light text-xl font-semibold">
          We Upload new products everyday keep checking back to find your treasure
          </p>
          <table className="w-full mt-8  ">
            <thead className="bg-white ">
              <tr className="divide-x-2 ">
                <th className="w-1/2 sm:w-auto ">
                  <td className="pl-2">Name</td>
                </th>
  
                <th>
                  <td className="pl-2">price</td>
                </th>
                {/* <th>
                         <td className="">
                         status
                         </td>
               </th> */}
                <th>
                  <td className="pl-2">refunds</td>
                </th>
              </tr>
            </thead>
            <tbody>
              {filter.map((i:product, index: number) => (
                <tr
                  onClick={() =>
                    window.location.assign(`guild/product/${i._id}?type=${i.type}`)
                  }
                  key={index}
                  className=" group cursor-pointer overflow-scroll divide-x-2 divide-y-2 bg-green-300 hover:bg-white  px-4"
                >
                  <td className="text-xs  h-14 pl-2 w-28  border-2  sm:text-lg font-semibold">{i.name}</td>
                  <td className="text-xs  h-14 pl-2 w-28 sm:text-lg font-semibold">$ {i.price}</td>
                  {/* <td className="text-xs sm:text-base w-28">{i.verified ? "Verified" : "Unverified"}</td> */}
                  <td className="text-xs  h-14 pl-2 w-28 sm:text-lg font-semibold">{i.refunds ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
  
        </div>
        )
    }

    if (loading) {
        return null
    }

    if (!products) {
        return <h3>...loading</h3>
    }

    const filter = type ? products.filter((product:product)=>{
     return product?.type.toLowerCase().includes(type.toLowerCase())
    }) : products

    const top = products ? products.filter((product:product)=>{
      return product?.topseller == true
     }) : []

    const discount = products ? products.filter((product:product)=>{
      return product?.discount == true
     }) : []

  return (
    <div className="pt-20 px-2">
      <div className="py-4">
        <h3 className=" sm:text-center text-light text-3xl font-semibold sm: sm:text-5xl">
          All Products
        </h3>
      </div>
      <div className="flex  flex-wrap gap-4 justify-start sm:gap-x-6 sm:justify-center  py-2">
        {ProductNames.map((product) => (
          <ProductTab func={() => setSearchParams(`type=${product.type}`)} name={product.name} image={product.image} />
        ))}
      </div>

      
      <>
      {
        !type ? 
        <div className="">
        <TopSellers/>
        <Discounts/>
        </div>
        :
        <ProductTable/>
      }
        </>

    </div>
  );
}

export default DashBoardHome