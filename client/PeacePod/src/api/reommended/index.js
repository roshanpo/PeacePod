import axios from "axios";

export const recommendMusic = async(data)=>{
    try{
        const response = await axios.post('http://localhost:8000/api/musicrecommend/',{ Content: data });
        return response.data.result;
    }catch (error) {
        console.error("error found")
        console.error(error.response.data);      
    }
}