import React from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// const mp3FileType = z.string().refine(value => value.endsWith('.mp3'), {
//   message: 'Please select an MP3 file',
// });

// const formSchema = z.object({
//   music_name: z.string().min(2).max(50),
//   music: mp3FileType,
// });


function AddMusic() {
  const form = useForm();

  function onSubmit(data) {
    // Create a FormData object
    const formData = new FormData();

    // Append the music file to the FormData object
    formData.append("music", data.music[0]);

    // Append other form data fields if needed
    formData.append("music_name", data.music_name);

    // Now you can send this formData object using fetch or any other method
    console.log(formData);
  }

  return (
    <div className="lg:ml-52 px-2 py-2">
      <div>
        <h1 className="font-semibold text-xl text-center">Add Music</h1>
      </div>
      <div>
        {/* form  to add music*/}
        <div className="mt-8 lg:w-[500px] text-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Music Title</FormLabel>
                    <FormControl>
                      <Input placeholder="All is well" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Music Category</FormLabel>
                    <FormControl>
                      <Input placeholder="All is well" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
                control={form.control}
                name="music"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Add Music</FormLabel>
                    <FormControl>
                      <input type="file" {...field} accept=".mp3" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <input type="file" name='music' />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default AddMusic
