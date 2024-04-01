import axios from "axios";

export const getAllCategory = async()=>{
    const res = await axios.get('http://127.0.0.1:8000/api/allcategories');
    return res.data
}

