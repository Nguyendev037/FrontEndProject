import axios from "axios";

const baseURL = "https://66ab149c636a4840d7c94289.mockapi.io/liquid";

export const baseAxios = axios.create({
  baseURL: baseURL,
});

export const fetchTotalCount = async () => {
  try {
    const response = await baseAxios.get("");
    return response.data.length;
  } catch (error) {
    console.log("error: ", error);
    throw error;
  }
};

export const fetchData = async (page = 1, limit = 9) => {
  try {
    const totalCount = await fetchTotalCount();
    const response = await baseAxios.get(`?page=${page}&limit=9`);
    return {
      data: response.data,
      totalPages: Math.ceil(totalCount / limit),
    };
  } catch (error) {
    console.log("error: ", error);
    throw error;
  }
};

export const fetchDataAll = async () => {
  try {
    const response = await baseAxios.get("");
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    console.log("error: ", error);
    throw error;
  }
};

export const fetchDataId = async (id) => {
  try {
    const response = await baseAxios.get(`/${id}`);
    console.log("response: ", response);
    return response.data;
  } catch (error) {
    console.log("error:", error);
    throw error;
  }
};
