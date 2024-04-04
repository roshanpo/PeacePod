import { createContext,useState,useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
// import {  useNavigate } from "react-router-dom";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({children})=>{

    let [authTokens, setAuthTokens] = useState(()=>localStorage.getItem('authTokens')? JSON.parse(localStorage.getItem('authTokens')) : null);
    let [user, setUser] = useState(()=>localStorage.getItem('authTokens')? jwtDecode(localStorage.getItem('authTokens')) : null);
    let [loading, setLoading] = useState(true)
    let loginUser = async(e) =>{
        const response = await axios.post('http://127.0.0.1:8000/api/token/',{
            'username':e.username,
            'password':e.password
        },{
            headers: {
                'Content-Type': 'application/json',
            },
        })
        let data = response.data;
        if(response.status === 200 ){
            localStorage.setItem('authTokens', JSON.stringify(data));
            setAuthTokens(data);
            setUser(jwtDecode(data.access))
            
        }else{
            alert('Something went wrong while logging in the user!')     
        }
    }

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens')
    }

    const updateToken = async() =>{
        const response = await axios.post('http://127.0.0.1:8000/api/token/refresh/',{
            'refresh': authTokens.refresh
        },{
            headers: {
                'Content-Type': 'application/json',
            },
        })
        let data = response.data;
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens',JSON.stringify(data))
        } else {
            logoutUser()
        }
        
        if(loading){
            setLoading(false)
        }
    }

    let contextData = {
        user:user,
        authTokens:authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser
    }

    useEffect(()=>{
        const REFRESH_INTERVAL = 1000 * 60 * 4 // 4 minutes
        let interval = setInterval(()=>{
            if(authTokens){
                updateToken()
            }
        }, REFRESH_INTERVAL)
        return () => clearInterval(interval)

    },[authTokens])


    return(
       <AuthContext.Provider value={contextData}>
            {children}
       </AuthContext.Provider>
    )
}