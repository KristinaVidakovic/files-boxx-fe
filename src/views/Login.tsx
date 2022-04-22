import logo from '../assets/logo.png';
import { useForm } from "react-hook-form";
import { SignIn } from '../interfaces/user/sign-in.interface';

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

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
              <img src={logo} className="w-12 h-12" />
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
                  {...register("username", { required: true, maxLength: 20 })}
                />
                <div className="error-message" v-if="errors.username">
                  <div
                    className="mt-3 border-none text-red-700 px-4 rounded-xl relative"
                    role="alert"
                  >
                    {errors.username?.type === 'required' && <strong className="font-bold">Username is required field</strong>}
                    {errors.username?.type === 'maxLength' && <strong className="font-bold">Username must be less than 20 chars long</strong>}
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  placeholder="Password"
                  className="mt-1 pl-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  {...register("password", { required: true, maxLength: 20 })}
                />
                <div className="error-message" v-if="errors.password">
                  <div
                    className="mt-3 border-none text-red-700 px-4 rounded-xl relative"
                    role="alert"
                  >
                    {errors.password?.type === 'required' && <strong className="font-bold">Password is required field</strong>}
                    {errors.password?.type === 'maxLength' && <strong className="font-bold">Password must be less than 20 chars long</strong>}
                  </div>
                </div>
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