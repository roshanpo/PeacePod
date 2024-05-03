import axios from "axios";
export const registerUser = async(data)=>{
    const res = await axios.post('http://127.0.0.1:8000/api/register/',data);
    return res;
}

export async function getallUsers (){
    try{
        const response = await axios.get("http://localhost:8000/api/allusers/") 
        return response.data;
    }catch (error) {
        console.error("error found")
        console.error(error.response.data);     
    }
}

export async function deleteUser(user_id){
    try{
        const response = await axios.delete(`http://localhost:8000/api/delete-user/${user_id}/`);
    }catch (error) {
        console.error("error found")
        console.error(error.response.data); 
    }
}