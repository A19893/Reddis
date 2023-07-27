import axios from "axios"
export const signup=async(name,password)=>{
return  axios.post(`${process.env.REACT_APP_REGISTER_URL}`,{name,password});
}