import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com";
// --yet to expoft all
const getProductsAPI = async () => {
  axios.get("/products");
};

const getProductByIDAPI = async (id) => {
  axios.get(`/products/${id}`);
};

const createProductsAPI = async (product) => {
  axios.post(`/products`, product).then((res) => console.log(res));
};

const updateProductByIDAPI = async (id, product) => {
  axios.put(`/products/${id},${product}`);
};

const deleteProductByIDAPI = async (id) => {
  axios.delete(`/products/${id}`);
};
