import { useEffect, useState } from "react"
import axios from "axios"
import { useToast } from "@/components/ui/use-toast"
import Multiselect from 'multiselect-react-dropdown';

const options = [
  {id: 1, name: "calm"},
{id: 2, name: "peace"},
{id: 3, name: "sad"},
{id: 4, name: "happy"},
{id: 5, name: "excited"},
{id: 6, name: "chill"},
{id: 7, name: "lofi"},
{id: 8, name: "nature"},
{id: 9, name: "sounds"},
{id: 10, name: "emotional"},
{id: 11, name: "spiritual"},
{id: 12, name: "instrumental"},
{id: 13, name: "pleasant"},
]

const customStyles = {
  multiselectContainer: {
    // To change css for multiselect (Width,height,etc..)
    // Add your customizations here
  },
  searchBox: {
    // To change search box element look
    fontSize: '10px',
    minHeight: '50px',
    
    // background:'pink'
    // Add your customizations here
  },
  inputField: {
    // To change input field position or margin
    margin: '5px',
    padding: '5px',
    fontSize: '16px'
    // Add your customizations here
  },
  chips: {
    // To change css chips(Selected options)
    background: '#2c2e44',
    // Add your customizations here
  },
  optionContainer: {
    // To change css for option container
    border: '2px solid',
    // Add your customizations here
  },
  option: {
    // To change css for dropdown options
    color: 'black',
    // background: 'pink'
    ":hover": { background: 'pink' }
    // Add your customizations here
  },

};


const AddMusic = () => {
  const { toast } = useToast()
  const [image, setImage] = useState("")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")

  let [selectedOptions, setSelectedOptions] = useState([]);

  // const onSelectOptions = selectedItem => {
  //   const values = Object.entries(selectedItem);
  //   setSelectedOptions(values)
  // };

  // const onRemoveOptions = ( removedItem) => {
  //   const values = Object.entries(removedItem);
  //   setSelectedOptions(values)
  // };
  

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
    formData.append("keywords", selectedOptions.join(','));

    axios
      .post("http://127.0.0.1:8000/api/upload-music/", formData)
      .then((res) => {
        if (res.status === 201) {
          toast({ title: "Music added successfully." })
          setImage("")
          setTitle("")
          setCategory("")
          setSelectedOptions([])
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

          <label htmlFor="category" className="block mb-2 font-semibold">
            Music Tags
          </label>

          <Multiselect
          options={options}
          name="keywords"
          onSelect={(selectedItem) => setSelectedOptions(selectedItem.map(option => option.name))}
          onRemove={(removedItem) => setSelectedOptions(selectedOptions.filter(option => option !== removedItem.name))}
          displayValue="name"
          closeIcon="circle"
          placeholder="Select tags to associate with music"
          className="cursor-pointer"
          selectionLimit={4}
          style={customStyles}
        />

          <label htmlFor="music_file" className="block mt-2 mb-2 font-semibold">
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
