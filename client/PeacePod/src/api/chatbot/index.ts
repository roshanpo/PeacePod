import axios from "../axios";
export async function talkToHope (newData) {
    try{
        console.log('mutation called 2')
        const data = {...newData};
        const response = await axios.post("http://127.0.0.1:8000/api/chat/",data);
        const botMessage = response.data.result;
        return botMessage;
    }catch (error) {
        console.error("error found")
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
    }
}
   
