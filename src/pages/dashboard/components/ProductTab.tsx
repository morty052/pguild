

type Props = {
    name: string,
    image: string | any,
    func:any

}

function ProductTab({name, image, func}: Props) {
  return (
    <div onClick={()=>func()} className="bg-white cursor-pointer rounded-xl  flex flex-col p-2 flex-shrink-0   items-center  ">
       <div className=" ">
          <img src={image} alt="" className=" h-5 w-5" />
       </div>
      <div className="py-2">
       <p className="text-center text-sm font-semibold text-gray-800">
        {name}
       </p>
      </div>
    </div>
  )
}

export default ProductTab