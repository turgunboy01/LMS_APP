import { initialSignInFormData, initialSignUpFormData } from "@/config";
import { registerServices } from "@/services";
import { createContext, ReactNode, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);

  const handleRegisterUser = async (event) => {
    event.preventDefault();

    console.log("Yuborilayotgan ma'lumotlar:", signUpFormData);

    try {
      const data = await registerServices(signUpFormData);
      console.log("Ro'yxatdan o'tish muvaffaqiyatli:", data);
    } catch (error) {
      console.error("Xato yuz berdi:", error.response?.data || error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
        handleRegisterUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
