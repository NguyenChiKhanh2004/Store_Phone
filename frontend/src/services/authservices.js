import api from "./services";

export const login = async (phone, password) => {
  try {
    const response = await api.post("/user/login", { phone, password });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Đăng nhập thất bại");
    }
  }
};
export const Register = async (phone, password, email, full_name) => {
  try { 
    const response = await api.post("/user", { phone, password, email, full_name });
    return response.data;
  }
  catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Đăng ký thất bại");
    }
  }
  
};


export default {
  login,
  Register,
};
