import axios from 'axios'


export default async function GetBookDetails(userId,bookingId) {
  try {
       let response= await axios.get(`http://127.0.0.1:5000/api/my-bookings/${userId}/${bookingId}`)
 return response
  } catch (error) {
    return error
  }
}
