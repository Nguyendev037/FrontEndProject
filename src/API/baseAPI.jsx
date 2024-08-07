import axios from "axios";

const baseURL = "https://66ab149c636a4840d7c94289.mockapi.io/liquid";

export const baseAxios = axios.create({
  baseURL: baseURL,
});

export const fetchData = async (page = 1) => {
  try {
    const response = await baseAxios.get(`?page=${page}&limit=9`);
    return {
      data: response.data,
      totalPages: Math.ceil(response.headers["x-total-count"] / 9),
    };
  } catch (error) {
    console.log("error: ", error);
    throw error;
  }
};



export const fetchDataId = async (id) => {
  try {
    const response = await baseAxios.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.log("error:", error);
    throw error;
  }
};