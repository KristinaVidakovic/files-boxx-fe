import axios from "axios";
import { SignIn } from "../interfaces/user/sign-in.interface";
import { UserInfoById } from "../interfaces/user/user-info-by-id.interface";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

const getUserById = async (id: any) => {
  const response = await api.get<UserInfoById>(`/users/${id}`);
  return response.data;
}

const signIn = async (credentials: SignIn) => {
  const response = await api.post<SignIn>("users/auth/sign-in", credentials);
  return response.data;
}

const AxiosService = {
  getUserById,
  signIn,
}

export default AxiosService;