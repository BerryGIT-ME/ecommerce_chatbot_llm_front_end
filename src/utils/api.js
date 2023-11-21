import axios from "axios";
const api_endpoint = process.env.REACT_APP_API_ENDPOINT;

export async function sendMessage(data) {
  const result = await axios.post(api_endpoint, data);
  console.log(result);
}
