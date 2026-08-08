import axios from 'axios'


export default async function LoginApi(userData) {
  try {
       let response= await axios.post("http://127.0.0.1:5000/api/login",userData)
 return response
  } catch (error) {
    return error
  }
}
