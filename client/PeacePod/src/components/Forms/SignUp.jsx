import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"
import { DevTool } from "@hookform/devtools"
import { useEffect, useState } from "react"
import { Snackbar } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import { X } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const SignUp = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      username: "Jane Doe",
      email: "jane.doe@example.com",
      password: "password",
      confirmpassword: "password",
    },
    mode: "onTouched",
  })
  const { register, watch, formState, control, handleSubmit, reset } = form
  const { errors, isDirty, isSubmitting, isSubmitSuccessful } = formState

  const onSubmit = (data) => {
    // send the data to backend calling api
    // use axios and react query
    navigate('/')
    
  }

  useEffect(() => {
    if (isSubmitting) {
      <h1>Submitting...</h1>
    }
  })

  useEffect(() => {
    console.log("isSubmitSuccessful", isSubmitSuccessful)
    if (isSubmitSuccessful) {
      setOpen(true)
      console.log("popupopen", open)
      reset()
    }
  }, [isSubmitSuccessful, reset])

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <div className="rounded-full text-white px-1 py-1">
        <X />
      </div>
    </IconButton>
  )

  return (
    <>
      <div className="w-full overflow-y-scroll signup-background min-h-screen">
        {/* <div className=""> */}
          <div className="flex-flow-col p-10 w-[400px] md:w-[500px] mx-auto">
            <div className="">
              {/* <h1 className="leading-snug text-3xl shadow-sm text-white enriqueta-bold">Sign Up</h1> */}
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl shadow-sm enriqueta-bold">
                Sign up
              </h2>
              <p className="mt-2 text-lg text-black-600">
                Already have an account?{" "}
                <NavLink
                  to="/signin"
                  className="font-bold text-white transition-all duration-200 hover:underline"
                >
                  Sign In
                </NavLink>
              </p>
            </div>
            <div className="min-w-xs">
              <form
                action=""
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    UserName
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Jane Doe"
                    {...register("username", {
                      required: "Username is required.",
                    })}
                  />
                  <p className="text-sm italic text-red-500">
                    {errors.username?.message}
                  </p>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="janedoe@gmail.com"
                    {...register("email", {
                      required: "Username is required.",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#%${|}]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                  <p className="text-sm italic text-red-500">
                    {errors.email?.message}
                  </p>
                </div>

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

                <div className="mb-4">
                  <label
                    htmlFor="confirmpassword"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="confirmpassword"
                    type="password"
                    placeholder="password"
                    {...register("confirmpassword", {
                      required: "Password is required.",
                      validate: (value) => {
                        if (watch("password") != value) {
                          return "Your passwords do not match"
                        }
                      },
                    })}
                  />
                  <p className="text-sm italic text-red-500">
                    {errors.confirmpassword?.message}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="bg-[#2C2E44] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={!isDirty || isSubmitting}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
          </div>
        </div>
      </div>
      {open && (
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={open}
          autoHideDuration={4000}
          message="Sign In Sucessful."
          onClose={handleClose}
          action={action}
        />
      )}

      <DevTool control={control} />
    </>
  )
}
