import axios from "axios";
const api_endpoint = process.env.REACT_APP_API_ENDPOINT;

export async function sendMessage(data, cleanup) {
  try {
    const result = await axios.post(api_endpoint + "/api", data);
    cleanup(true, result.data);
  } catch {
    cleanup(false, {});
  }
}

export async function sendFile(file, cleanup) {
  try {
    const formdata = new FormData();
    formdata.append("file", file);
    const result = await axios.post(api_endpoint + "/image-upload", formdata);
    cleanup(true, result.data);
  } catch {
    cleanup(false, {});
  }
}
