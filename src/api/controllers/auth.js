import { api } from "..";

export const authController = (props) => {
  const baseRouth = "auth";
  const description = "เข้าสู่ระบบ";
  const config = {
    ...props,
    context: props?.context || null,
    router: props?.router || null,
    description,
  };
  return {
    signIn: async (params) => {
      return await api.post(`${baseRouth}/sign-in`, params, config);
    },
  };
};
