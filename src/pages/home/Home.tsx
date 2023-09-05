import { skull } from "../../assets";
import createUser from "../../features/createUser";
import { useState } from "react";
import { Link } from "react-router-dom";



function Home() {

  const [user, setuser] = useState({
    _type:"users",
    email:"",
    password:"",
  })

  const [error, seterror] = useState({
    email:'',
    password:"",
    text:""
  })


  const handleCreate = () => {
    createUser(user,seterror)
  }

  return (
    <div className="flex flex-col items-center gap-y-6 max-w-7xl mx-auto  py-20  md:gap-y-0 md:flex-row px-4 md:items-center  md:gap-x-10  ">
      <div className=" flex-1">
        {/* <!-- Title --> */}
        <h1 className="text-3xl  font-bold sm:text-5xl md:text-6xl sm:gap-y-10 md:leading-tight lg:text-5xl lg:leading-tight text-gray-200">
          <span className="text-red-500">Pirates's Guild</span>
        </h1>
        <p className="mt-3 text-base sm:text-2xl text-light">
          Comprehensive list of products and freebies for swashbucklers updated every single day by adventurer's.
        </p>
        {/* <!-- End Title --> */}

        <hr className="my-8" />

        {/* <!-- Form --> */}
        <form>
          <div className="mb-4">
            <label
              htmlFor="hs-hero-email-2"
              className="block text-sm font-medium text-white"
            >
              <span className="sr-only">Email address</span>
            </label>
            <input
              value={user.email}
              onChange={(e) => {
                setuser((prev) => (
                  {
                    ...prev,
                    email:e.target.value
                  }
                ))
              }}
              type="email"
              id="hs-hero-email-2"
              className="py-3 px-4 block w-full  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 bg-slate-900 border-gray-700 text-gray-400"
              placeholder="Email address"
            />
           { error.email && <p className="text-red-300">{error.text}</p>}
          </div>

          <div className="mb-4">
            <label
              htmlFor="hs-hero-password-2"
              className="block text-sm font-medium text-white"
            >
              <span className="sr-only">Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => {
                setuser((prev) => (
                  {
                    ...prev,
                    password:e.target.value
                  }
                ))
              }}
              type="password"
              id="hs-hero-password-2"
              className="py-3 px-4 block w-full  rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 bg-slate-900 border-gray-700 text-gray-400"
              placeholder="Password"
            />
            { error.password && <p className="text-red-300">{error.text}</p>}
          </div>

          <div className="grid gap-y-4">
            <button
             onClick={(e)=> {
              e.preventDefault()
              handleCreate()
             }}
              type="submit"
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm focus:ring-offset-gray-800 sm:p-4 sm:text-2xl"
            >
              Join Guild
            </button>
            <Link to={"/login"}
              
              type="submit"
              className="py-3 px-4 md:hidden inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm focus:ring-offset-gray-800 sm:p-4 sm:text-2xl"
            >
              Login
            </Link>
          </div>
        </form>
        {/* <!-- End Form --> */}
      </div>
      <div className="md:w-1/2">
        <img src={skull} className="w-full object-contain" alt="" />
      </div>
      {/* <!-- End Col --> */}
    </div>
  );
}

export default Home;
