
import { API_URL } from "./urls";

const FetchDataFromApi = async (endpoint) => {

  
const data = await fetch(`${API_URL}${endpoint}`);
const userList = await data.json();

    return { userList };
}

export default FetchDataFromApi;
