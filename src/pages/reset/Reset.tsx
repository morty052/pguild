/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import { skull } from "../../assets";
import resetPass from "../../features/resetPass";

type error = {
  email: string | boolean;
  password: string | boolean;
  text: string;
};

const Reset = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm, setconfirm] = useState("");

  const [error, seterror] = useState<error>({
    email: "",
    password: "",
    text: "",
  });

  //@ts-ignore
  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password || !confirm) {
      return seterror({
        email: true,
        password: true,
        text: "Fill All Inputs",
      });
    }

    if (!email.includes("@") || !email.includes(".")) {
      return seterror({
        email: true,
        password: "",
        text: "Invalid Email",
      });
    }

    if (password.length < 6) {
      return seterror({
        email: false,
        password: true,
        text: "Password must be more than 6 characters",
      });
    }

    if (password != confirm) {
      return seterror({
        email: "",
        password: true,
        text: "Passwords must match",
      });
    }

    resetPass(email, password, confirm);
  }

  return (
    <div className="h-screen bg-slate-800 ">
      <div className=" flex h-full items-center py-16">
        <main className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm  ">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 ">
                  Reset Password
                </h1>
              </div>

              <div className="mt-5">
                <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6   ">
                  <img className="h-20 w-20" src={skull} alt="" />
                </div>

                {/* <!-- Form --> */}
                <form>
                  <div className="grid gap-y-4">
                    {/* <!-- Form Group --> */}
                    <div>
                      <label htmlFor="email" className="block text-sm mb-2 ">
                        Email address
                      </label>
                      <div className="relative">
                        <input
                          value={email}
                          onChange={(e) => {
                            if (error.email || error.password) {
                              seterror({
                                email: "",
                                password: "",
                                text: "",
                              });
                            }
                            setemail(e.target.value);
                          }}
                          type="email"
                          id="email"
                          name="email"
                          className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "
                          required
                          aria-describedby="email-error"
                        />
                        <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      {error.email && (
                        <p className="text-red-500">{error.text}</p>
                      )}
                    </div>
                    {/* <!-- End Form Group --> */}

                    {/* <!-- Form Group --> */}
                    <div>
                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="password"
                          className="block text-sm mb-2 "
                        >
                          New Password
                        </label>
                        {/* <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../examples/html/recover-account.html">Forgot password?</a> */}
                      </div>
                      <div className="relative">
                        <input
                          value={password}
                          onChange={(e) => {
                            if (error.email || error.password) {
                              seterror({
                                email: "",
                                password: "",
                                text: "",
                              });
                            }
                            setpassword(e.target.value)
                          }}
                          type="password"
                          id="password"
                          name="password"
                          className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "
                          required
                          aria-describedby="password-error"
                        />
                        <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      {error.password && (
                        <p className="text-red-500">{error.text}</p>
                      )}
                      <label htmlFor="password" className="block text-sm mb-2 ">
                        Confirm Password
                      </label>
                      <div className="relative ">
                        <input
                          value={confirm}
                          onChange={(e) => {
                            if (error.email || error.password) {
                              seterror({
                                email: "",
                                password: "",
                                text: "",
                              });
                            }

                            setconfirm(e.target.value)
                          }}
                          type="password"
                          id="confirmpassword"
                          name="password"
                          className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500   "
                          required
                          aria-describedby="password-error"
                        />
                        <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                      {error.password && (
                        <p className="text-red-500">{error.text}</p>
                      )}
                    </div>
                    {/* <!-- End Form Group --> */}

                    <button
                      onClick={(e) => handleSubmit(e)}
                      type="submit"
                      className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm "
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                {/* <!-- End Form --> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Reset;
