// /src/api/controllers/customers.js
import { api } from "..";

export const customersController = (props = {}) => {
  const baseRoute = "customers";
  const description = "จัดการลูกค้า";

  const config = {
    ...props,
    context: props?.context || null,
    router: props?.router || null,
    description: props?.description || description,
  };

  return {
    // สร้างลูกค้าใหม่
    create: async (params) => {
      return await api.post(`${baseRoute}`, params, config);
    },

    findAll: async () => {
      return await api.get(`${baseRoute}`, config);
    },

    // findOne: async (id) => {
    //   return await api.get(`${baseRoute}/${id}`, config);
    // },

    // update: async (id, params) => {
    //   return await api.patch(`${baseRoute}/${id}`, params, config);
    // },

    // remove: async (id) => {
    //   return await api.delete(`${baseRoute}/${id}`, config);
    // },
  };
};
