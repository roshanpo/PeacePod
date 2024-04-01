// import React from "react"
// import { z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { useQuery } from "@tanstack/react-query"
// import { getAllCategory } from "@/api/category"

import { addMusic } from "@/api/music"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"

// // const mp3FileType = z.string().refine(value => value.endsWith('.mp3'), {
// //   message: 'Please select an MP3 file',
// // });

// // const formSchema = z.object({
// //   music_name: z.string().min(2).max(50),
// //   music: mp3FileType,
// // });

// function AddMusic() {
//   const form = useForm()

//   const { data: categories } = useQuery({
//     queryKey: ["music_catgeories"],
//     queryFn: getAllCategory,
//   })

//   function onSubmit(data) {
//     // Create a FormData object
//     const formData = new FormData();
//     // Append the music file to the FormData object
//     formData.append("music_file", data.music_file[0]);

//     // Append other form data fields if needed
//     formData.append("title", data.title);
//     formData.append("category", data.category);
//     // for (let pair of formData.entries()) {
//     //   console.log(pair[0], pair[1]);
//     // }
//     fetch("http://127.0.0.1:8000/api/upload-music", {
//       method: "POST",
//       body: formData,
//     })
//     .then(response => {
//       console.log(response)
//       if (response.ok) {
//         console.log("Music file uploaded successfully");
//         // Handle success response
//       } else {
//         console.error("Failed to upload music file");
//         // Handle error response
//       }
//     })
//     .catch(error => {
//       console.error("Error occurred while uploading music file:", error);
//       // Handle network error
//     });

//   }

//   return (
//     <div className="lg:ml-52 px-2 py-2">
//       <div>
//         <h1 className="font-semibold text-xl text-center">Add Music</h1>
//       </div>
//       <div>
//         {/* form  to add music*/}
//         <div className="mt-8 lg:w-[500px] text-sm">
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//               <FormField
//                 control={form.control}
//                 name="title"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Music Title</FormLabel>
//                     <FormControl>
//                       <Input placeholder="All is well" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="category"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Music Category</FormLabel>
//                     <FormControl>
//                       <Input placeholder="happy" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               {/* <FormField
//                 control={form.control}
//                 name="music"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Add Music</FormLabel>
//                     <FormControl>
//                       <input type="file" {...field} accept=".mp3" />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               /> */}
//               <FormField
//                 control={form.control}
//                 name="music_file" // Match this with the name attribute of the input
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Music File</FormLabel>
//                     <FormControl>
//                       <input type="file" {...field} accept=".mp3" />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               {/* <input type="file" accept=".mp3" name='music_file' /> */}

//               <Button type="submit">Submit</Button>
//             </form>
//           </Form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AddMusic

const AddMusic = () => {
  const [image, setImage] = useState("")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleImagechange = (e) => {
    setImage(e.target.files[0])
  }

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append("title", title)
    formData.append("category", category)
    formData.append("music_file", image)

    axios
      .post("http://127.0.0.1:8000/api/upload-music/", formData)
      .then((res) => {
        console.log(res)
      })
  }
  return (
    <>
      <div className="lg:ml-56 max-w-[700px]">
        <div>
          <h1 className="font-semibold text-xl text-center">Add Music</h1>
        </div>

        <div className="lg:ml-56">
          <label htmlFor="title" className="block mb-2 font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleTitle}
            className="block mb-4 border border-gray-300 rounded-md p-2 w-full"
          />

          <label htmlFor="category" className="block mb-2 font-semibold">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            onChange={handleCategory}
            className="block mb-4 border border-gray-300 rounded-md p-2 w-full"
          />

          <label htmlFor="music_file" className="block mb-2 font-semibold">
            Add Music File
          </label>
          <input
            type="file"
            id="music_file"
            name="music_file"
            onChange={handleImagechange}
            className="block mb-4"
          />

          <button
            onClick={handleSubmit}
            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  )
}

export default AddMusic
