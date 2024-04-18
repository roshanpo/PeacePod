import { useForm } from "react-hook-form"
import { NavLink, useNavigate } from "react-router-dom"
import { DevTool } from "@hookform/devtools"
import { useEffect, useState } from "react"
import useAuth from "@/hooks/useAuth"
import { useToast } from "../ui/use-toast"
import { useModalStates } from "@/Modal/useModalStore"

export const SignIn = () => {
  const navigate = useNavigate();
  const { loginUser } = useAuth()
  const signinMessage = useModalStates((state) => state.signinMessage);
  const { toast } = useToast()
  const form = useForm({
    mode: "onTouched",
  })
  const { register, formState, control, handleSubmit, reset } = form
  const { errors, isSubmitSuccessful } = formState

  useEffect(() => {
    if (isSubmitSuccessful) {
      toast({title: signinMessage})
      navigate('/')
      reset()
    }
  }, [isSubmitSuccessful, reset])

  return (
    <>
      <div className="lg:ml-52 w-full min-h-screen signup-background">
        <div className="flex-flow-col p-10 w-[400px] md:w-[500px] mx-auto">
          <div className="">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl shadow-sm enriqueta-bold">
              Sign In
            </h2>
            <p className="mt-2 text-lg text-black-600">
              Don't have an account?{" "}
              <NavLink
                to="/signup"
                className="font-bold text-white transition-all duration-200 hover:underline"
              >
                Create a free account
              </NavLink>
            </p>
          </div>
          <div className="min-w-xs">
            <form
              onSubmit={handleSubmit(loginUser)}
              noValidate
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              {/* email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  UserName
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="janedoe"
                  {...register("username", {
                    required: "Username is required.",
                  })}
                />
                <p className="text-sm italic text-red-500">
                  {errors.email?.message}
                </p>
              </div>

              {/* password */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: "Password is required.",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  })}
                />
                <p className="text-sm italic text-red-500">
                  {errors.password?.message}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-slate-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  // disabled={isLoading}
                >
                  <span className="flex items-center justify-center gap-3">
                  {/* {isLoading && <Loader />} */}
                  <span>Login</span>
                </span>
                </button>

                
              </div>
            </form>
            
          </div>
        </div>
      </div>
      

      <DevTool control={control} />
    </>
  )
}
