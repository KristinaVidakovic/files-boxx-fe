<template>
  <div class="font-sans">
    <div class="relative min-h-screen flex flex-col sm:justify-center items-center">
      <div class="relative sm:max-w-sm w-full">
        <div
          class="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"
        ></div>
        <div
          class="card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"
        ></div>
        <div class="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
          <div class="flex items-center relative px-4 pt-4 w-full">
            <img :src="logo" class="w-12 h-12" />
            <div class="ml-3">
              <p class="font-medium text-gray-800">Welcome to FilesBoxx</p>
            </div>
          </div>
          <form method="#" action="#" class="mt-10">
            <div>
              <input
                type="text"
                placeholder="Username"
                v-model="username"
                class="mt-1 pl-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
              <div class="error-message" v-if="errors.username">
                <div
                  class="mt-3 border-none text-red-700 px-4 rounded-xl relative"
                  role="alert"
                >
                  <strong class="font-bold">{{ errors.username }}</strong>
                </div>
              </div>
            </div>

            <div class="mt-7">
              <input
                type="password"
                placeholder="Password"
                v-model="password"
                class="mt-1 pl-3 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
              <div class="error-message" v-if="errors.password">
                <div
                  class="mt-3 border-none text-red-700 px-4 rounded-xl relative"
                  role="alert"
                >
                  <strong class="font-bold">{{ errors.password }}</strong>
                </div>
              </div>
            </div>

            <div class="mt-7">
              <button
                @click="signIn"
                class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
              >Login</button>
            </div>

            <div class="mt-7">
              <div class="flex justify-center items-center">
                <label class="mr-2">Are you new?</label>
                <a
                  href="#"
                  class="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                >Create an account</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import logo from '../../assets/icons/filesboxx-logo.png';
import { useField, useForm } from 'vee-validate';
import { object, string, StringSchema } from 'yup';

const { handleSubmit, errors } = useForm({
  validationSchema: object({
    username: string().required().label('Username') as StringSchema<string>,
    password: string().required().label('Password') as StringSchema<string>
  }),
  initialValues: {
    username: '',
    password: ''
  }
});

const signIn = handleSubmit(async values => {
  console.log(values);
})


const { value: username } = useField<string>('username');
const { value: password } = useField<string>('password');
</script>