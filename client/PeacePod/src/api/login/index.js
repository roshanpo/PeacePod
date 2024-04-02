import axios from "axios";
export const registerUser = async(data)=>{
    const res = await axios.post('http://127.0.0.1:8000/api/register/',data);
    return res.data;
}