import axios from 'axios'


export default async function BookApi(userData) {
  try {
       let response= await axios.post("http://127.0.0.1:5000/api/book",userData)
 return response
  } catch (error) {
    return error
  }
}
