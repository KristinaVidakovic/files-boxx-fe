import axios from "axios";
import { UserInfoById } from "../interfaces/user/user-info-by-id.interface";

const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

const getUserById = async (id: any) => {
  const response = await api.get<UserInfoById>(`/users/${id}`);
  return response.data;
}

const AxiosService = {
  getUserById,
}

export default AxiosService;