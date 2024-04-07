import { useState } from "react"
import axios from "axios"
import { useToast } from "@/components/ui/use-toast"
const AddMusic = () => {
  const { toast } = useToast()
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
        if (res.status === 201) {
          toast({ title: "Music added successfully." })
          setImage("")
          setTitle("")
          setCategory("")
          // console.log('first')
          // alert('added')
        }
      })
  }
  return (
    <>
      <div className="lg:ml-52 mx-4 max-w-[700px]">
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
