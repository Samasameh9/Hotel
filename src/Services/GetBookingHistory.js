import axios from 'axios'


export default async function GetBookingHistory(userId) {
  try {
       let response= await axios.get(`http://127.0.0.1:5000/api/my-bookings/${userId}`)
 return response
  } catch (error) {
    return error
  }
}
