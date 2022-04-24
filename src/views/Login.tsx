
import { useState } from 'react';
import logo from '../assets/logo.png';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useQuery } from "react-query";
import { UserInfoById } from '../interfaces/user/user-info-by-id.interface';
import { SignIn } from '../interfaces/user/sign-in.interface';
import AxiosService from '../api/request';

const schema = yup.object({
  username: yup.string().required().min(8).max(20),
  password: yup.string().required().min(8).max(20),
}).required();

const Login : React.FC = () => {
  const [id, setId] = useState("");
  const [info, setInfo] = useState("");

  const formatResponse = (res: any) => {
    return JSON.stringify(res, null, 2);
  };

  const { register, handleSubmit, formState: { errors } } = useForm<SignIn>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: SignIn) => console.log(data);

  const { isLoading: isLoadingUserData, refetch: getUserInfoById } = useQuery<UserInfoById, Error>(
    "query-user-by-id",
    async () => {
      return await AxiosService.getUserById(id);
    },
    {
      enabled: false,
      retry: 1,
      onSuccess: (res) => {
        setInfo(formatResponse(res));
      },
      onError: (err: any) => {
        setInfo(formatResponse(err.response?.data || err));
      },
    }
  );

  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center">
        <div className="relative sm:max-w-sm w-full">
          <div
            className="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"
          ></div>
          <div
            className="card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"
          ></div>
          <div className="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
            <div className="flex items-center relative justify-center pt-4 w-full">
              <img src={logo} className="w-12 h-12 -rotate-15" />
              <div className="ml-3">
                <p className="font-medium text-gray-800">Welcome to FilesBoxx</p>
              </div>
            </div>
            <form method="#" action="#" className="mt-10" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="mt-1 pl-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  {...register("username")}
                />
                {errors.username && (
                  <div className="error-message">
                    <div
                      className="mt-3 border-none text-red-700 px-4 rounded-xl relative"
                      role="alert"
                    >
                      <strong className='font-bold'>{errors.username?.message}</strong>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  placeholder="Password"
                  className="mt-1 pl-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  {...register("password")}
                />
                {errors.password && (
                  <div className="error-message">
                    <div
                      className="mt-3 border-none text-red-700 px-4 rounded-xl relative"
                      role="alert"
                    >
                      <strong className='font-bold'>{errors.password?.message}</strong>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-7">
                <button
                  className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                >Login</button>
              </div>

              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2">Are you new?</label>
                  <a
                    href="#"
                    className="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                  >Create an account</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login