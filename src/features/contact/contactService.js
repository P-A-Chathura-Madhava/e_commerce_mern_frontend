import axios from "axios";
// import { base_url, config } from "../../utils/axiosConfig";

const postQuery = async (contactData) => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}enquiry`, contactData);
  if (response.data) {
    return response.data;
  }
};

export const contactService = {
  postQuery,
};
