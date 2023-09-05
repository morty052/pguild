type Props = {
  image: string;
  price: string;
  name: string;
  to:string
};

function ProductCard({ image, price, name,to }: Props) {
  return (
    <div  className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
      <a>
        <img className="p-8 rounded-t-lg" src={image} alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <a>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
            {name}
          </h5>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 ">${price}</span>
          <a onClick={() => window.location.assign(`${to}`)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">
            Order
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
