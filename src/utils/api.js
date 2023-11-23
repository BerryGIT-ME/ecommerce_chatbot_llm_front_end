import axios from "axios";
const api_endpoint = process.env.REACT_APP_API_ENDPOINT;

export async function sendMessage(data, cleanup) {
  try {
    const result = await axios.post(api_endpoint, data);
    cleanup(true, result.data);
  } catch {
    cleanup(false, {});
  }
}
