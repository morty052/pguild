/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link, useParams, useSearchParams } from "react-router-dom"
import useFetch from "../../../hooks/useFetch"
import { twitter, FB, ID_ME, IG, Linkedin, indeed, cam } from "../../../assets"
import wallets from "../../../constants/Wallets"
import { ProductCard } from "../components"
import howToUse from "../../../constants/howToUse"


type howProps = {
  type:string
}

function ProductPage() {

    const id = useParams().id
    
    const [searchParams] = useSearchParams()
    

     const type = searchParams.get('type')
     
    //@ts-ignore
     let image

     function How({type}:howProps) {
      let tut

      switch (true) {
        case type?.toLowerCase().includes("cam"): 
            tut = howToUse.cam
            break;

        default:
          tut = howToUse.loginItems
            break;
     }

     return(
      <p className="text-light">
        {tut}
      </p>
     )

     }

     function getRandomInt(max:number) {
      return Math.floor(Math.random() * max);
    }

    const wildcard = getRandomInt(6)

    const wallet = wallets[wildcard].wallet

   const {data, loading} = useFetch(`*[_id == "${id}"]`)
   const {data:moreproducts} = useFetch(`*[_type == "product"]`)

   const product = data ?  data[0] : []

  //@ts-ignore
   const reccomended = moreproducts ?  moreproducts?.filter((product)=>{

    return product.type.toLowerCase().includes(type?.toLowerCase())
   }) : []

   if (loading) {
    return null
   }
    
    if (!product) {
        return null
    }

    switch (true) {
        case type?.toLowerCase().includes("twitter"): 
            console.log("this is the type", type)
            image = twitter
            break;

        case type?.toLowerCase().includes("facebook"): 
            console.log("this is the type", type)
            image = FB
            break;

        case type?.toLowerCase().includes("idme"): 
            console.log("this is the type", type)
            image = ID_ME
            break;

        case type?.toLowerCase().includes("instagram"): 
            console.log("this is the type", type)
            image = IG
            break;

        case type?.toLowerCase().includes("linkedin"): 
            console.log("this is the type", type)
            image = Linkedin
            break;

        case type?.toLowerCase().includes("indeed"): 
            console.log("this is the type", type)
            image = indeed
            break;

        case type?.toLowerCase().includes("cam"): 
            console.log("this is the type", type)
            image = cam
            break;
     
        default:
            break;
     }

    
    

    


  return (
    <div className="container mx-auto px-6  py-20">
      <div className="md:flex md:items-center">
        <div className="w-full h-64 md:w-1/2 lg:h-96">
          <img
            className="h-full w-full rounded-md object-contain max-w-lg mx-auto"
            src={image}
            alt="Nike Air"
          />
        </div>
        <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
          <h3 className="text-light uppercase text-lg">{product.name}</h3>
          <span className="text-light mt-3 text-2xl">${product.price}</span>
          <hr className="my-3" />

          {/* <div className="mt-6">
            <h3 className="text-light">About Product</h3>
            <p className=" text-light">
              this product will fetch you a lot of money ma dude dont worry just
              you wait and see , one more thing bro change your attitude and
              also know you are old and try to make some money to set yourself
              up.
            </p>
          </div> */}

          <div className="mt-6">
            <h3 className="text-light">How to use</h3>
            {/* <p className=" text-light">
              this product will fetch you a lot of money ma dude dont worry just
              you wait and see , one more thing bro change your attitude and
              also know you are old and try to make some money to set yourself
              up.
            </p> */}
            <How type={`${type}`} />
          </div>

          <div className="flex items-center mt-6 gap-x-2">
           <Link to={`/checkout/${product._id}/${wallet}?type=${product.type}`}>
           <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
              Order Now
            </button>
           </Link>
            {/* <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
              Test OTP
            </button> */}
          </div>
        </div>
      </div>

      {/* MORE PRODUCTS */}
      <div className="mt-16">
        <h3 className="text-light text-2xl font-medium">More Products</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {
            //@ts-ignore
            reccomended?.map((i, index:number)=>(
            <ProductCard 
            key={index}
            //@ts-ignore
            image={image}
            price={i.price}
            name={i.name}
            to={`/guild/product/${i._id}?type=${i.type}`}
            />
            ))
          }

        </div>
      </div>
    </div>
  );
}

export default ProductPage