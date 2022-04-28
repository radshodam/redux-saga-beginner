import axios from "axios";
// client baseURL
const client = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

//get
export const getProducts = () => {
  debugger;
  
  client.get("/1").then((response) => {
    const data = response.data;
    console.log(data)
    debugger;
  });
};
//post
export const addProducts = () => {
  client
    .post("/1")
    .then((response) => {
      const data = response.data;
    })
    .catch((error) => {
      const Error = error;
    });
};
