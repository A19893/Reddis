import axios from "axios"
export const login=async(name,password)=>{
await axios.get(`${process.env.REACT_APP_LOGIN_URL}`,{name,password});
}