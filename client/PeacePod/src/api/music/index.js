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
   
export async function getAllMusic () {
    try{
        const response = await axios.get("http://localhost:8000/api/allmusic/") 
        return response.data;
    }catch (error) {
        console.error("error found")
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
    }
}

export async function deleteMusic(music_id){
    try{
        const response = await axios.delete(`http://localhost:8000/api/delete-music/${music_id}/`);
    }catch (error) {
        console.error("error found")
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
    }
}

// get catgory music
export async function getCategoryMusic(music_category){
    try{
        let category = music_category.charAt(0).toUpperCase() + music_category.slice(1);
        const response = await axios.get(`http://localhost:8000/api/category/${category}/`);
        return response.data;
    }catch (error) {
        console.error("error found")
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
    }
}