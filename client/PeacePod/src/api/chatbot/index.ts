import axios from "../axios";
export async function talkToHope (newData) {
    try{
        const response = await axios.post("http://127.0.0.1:8000/api/chat/",{ Content: newData });
        const botMessage = response.data.result;
        return botMessage;
    }catch (error) {
        console.error("error found")
        console.error(error.response.data); 
    }
}
   
