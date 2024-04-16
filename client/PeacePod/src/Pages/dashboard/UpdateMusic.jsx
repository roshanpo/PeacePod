import React from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";

export default function UpdateMusic(title) {
    const form = useForm({
        defaultValues: {
          title: title,
        //   lastName: ''
        }
      });
      const {register, handleSubmit, reset, formState} = form;
      const {errors} = formState;
    const onsubmit = () =>{
        console.log('submitted')
      }
  return (
    <div>
      <form noValidate onSubmit={handleSubmit(onsubmit)}>
        <input
          type="text"
          {...register("title", {
            required: "This field is required",
          })}
        />
        {/* <p className="text-red">{errors?.title.message}</p> */}
        <Button>Submit</Button>
      </form>
    </div>
  )
}
