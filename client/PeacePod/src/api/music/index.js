import axios from "../axios";
export async function addMusic (formData) {
    try{
        const response = await axios.post("http://127.0.0.1:8000/api/upload-music/",formData);
        // const botMessage = response.data.result;
        // return botMessage;
        console.log(response)
    }catch (error) {
        console.error("error found")
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
    }
}
   
