import axios from "axios";
import { config } from "../../utils/axiosConfig";

const getProducts = async (data) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}product?${data?.brand ? `brand=${data?.brand}&&` : ""}${
      data?.tag ? `brand=${data?.tag}&&` : ""
    }${data?.category ? `category=${data?.category}&&` : ""}${
      data?.minPrice ? `price[gte]=${data?.minPrice}&&` : ""
    }${data?.maxPrice ? `price[lte]=${data?.maxPrice}&&` : ""}${
      data?.sort ? `sort=${data?.sort}&&` : ""
    }`
  );
  if (response.data) {
    return response.data;
  }
};

const getSingleProduct = async (id) => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}product/${id}`);
  if (response.data) {
    return response.data;
  }
};

const addToWishlist = async (prodId) => {
  const response = await axios.put(
    `${process.env.REACT_APP_BASE_URL}product/wishlist`,
    { prodId },
    config
  );
  if (response.data) {
    return response.data;
  }
};

const rateProduct = async (data) => {
  const response = await axios.put(`${process.env.REACT_APP_BASE_URL}product/rating`, data, config);
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProducts,
  addToWishlist,
  getSingleProduct,
  rateProduct,
};
