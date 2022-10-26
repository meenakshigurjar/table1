//import axios from 'axios';

//const userDataFromApi = axios.get('https://jsonplaceholder.typicode.com/users');
//export { userDataFromApi };
import axios from 'axios';
import { useState, useEffect } from "react";
 const API = axios.get({
  baseURL: "https://jsonplaceholder.typicode.com",
});
export default API;

 export function Data () {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // using Async Await
  const getMyPostData = async () => {
    console.log("get my code")
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  // NOTE:  calling the function
  useEffect(() => {
    getMyPostData();
  }, []);


return [myData,isError]
}
//export default Data;