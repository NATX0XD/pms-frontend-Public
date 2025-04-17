// /src/api/controllers/authController.js
import { api } from "..";

export const authController = (props = {}) => {
  const baseRoute = "auth";
  const description = "เข้าสู่ระบบ";

  const config = {
    ...props,
    context: props?.context || null,
    router: props?.router || null,
    description,
  };

  return {
    signIn: async (params) => {
      return await api.post(`${baseRoute}/sign-in`, params, config);
    },
  };
};

// src/api/controllers/auth.js

// import { api } from "../index";

// export const authController = {
//   signIn: async (credentials) => {
//     try {
//       const response = await api.post("/auth/sign-in", credentials);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   },
// };
