import axiosInstance from "@/api/axiosInstance";

export const registerServices = async (formData) => {
  try {
    const data = await axiosInstance.post("/auth/register", {
      ...formData,
      role: "user",
    });
    return data.data;
  } catch (error) {
    console.error("Register Error:", error.response?.data || error.message);
    throw error;
  }
};

export const loginServices = async (formData) => {
  try {
    const data = await axiosInstance.post("/auth/login", formData);
    return data.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw error;
  }
};

export const checkAuthSerices = async () => {
  try {
    const data = await axiosInstance.get("/auth/check-auth");
    return data.data;
  } catch (error) {
    console.error("Check Auth Error:", error.response?.data || error.message);
    throw error;
  }
};
