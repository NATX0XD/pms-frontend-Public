// src/api/index.js
// import axios from "axios";
// import { getSession, signOut } from "next-auth/react";

// const https = require("https");
// const agent = new https.Agent({
//   rejectUnauthorized: false,
// });

// const axiosService = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
//   httpsAgent: agent,
// });

// // ดึง accessToken โดยตรงจาก next-auth session
// axiosService.interceptors.request.use(async (config) => {
//   const session = await getSession();
//   const accessToken = session?.access_token;

//   if (accessToken) {
//     config.headers["Authorization"] = `Bearer ${accessToken}`;
//   }

//   return config;
// });

// axiosService.interceptors.response.use(
//   (response) => response.data,
//   async (error) => {
//     const { response, config, code } = error;

//     if (code === "ERR_NETWORK") {
//       await new Promise((resolve) => setTimeout(resolve, 10000));
//       return axiosService(config);
//     }

//     if (response?.status === 401) {
//       signOut({ callbackUrl: "/sign-in" });
//     }

//     return Promise.reject(response?.data || error);
//   }
// );

// // เรียกใช้งานได้แบบ api.get/post/put/delete
// const service = () => ({
//   get: async (url, config) => await axiosService.get(url, config),
//   post: async (url, payload, config = null) =>
//     await axiosService.post(url, payload, config),
//   patch: async (url, payload, config = null) =>
//     await axiosService.patch(url, payload, config),
//   put: async (url, payload, config = null) =>
//     await axiosService.put(url, payload, config),
//   delete: async (url, config) => await axiosService.delete(url, config),
// });

// const api = service();
// export { axiosService, api };

// // src/api/index.js
// import axios from "axios";

// const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
// });

// export { api };
