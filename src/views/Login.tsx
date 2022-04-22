import logo from '../assets/logo.png';

const Login = () => {
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
          <form method="#" action="#" className="mt-10">
            <div>
              <input
                type="text"
                placeholder="Username"
                v-model="username"
                className="mt-1 pl-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
              <div className="error-message" v-if="errors.username">
                <div
                  className="mt-3 border-none text-red-700 px-4 rounded-xl relative"
                  role="alert"
                >
                  <strong className="font-bold">erori ako ih ima?</strong>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <input
                type="password"
                placeholder="Password"
                v-model="password"
                className="mt-1 pl-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
              <div className="error-message" v-if="errors.password">
                <div
                  className="mt-3 border-none text-red-700 px-4 rounded-xl relative"
                  role="alert"
                >
                  <strong className="font-bold">erori ako ih ima?</strong>
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