import { Fragment } from "react";
import { Navigate, useLocation } from "react-router-dom";

const RouteGuard = ({ authenticated, user, element }) => {
  const location = useLocation();

  // 1. Foydalanuvchi autentifikatsiyadan o'tmagan bo'lsa
  if (!authenticated && !location.pathname.includes("/auth")) {
    return <Navigate to="/auth" replace />;
  }

  // 2. Foydalanuvchi `instructor` emas va noto'g'ri yo'nalishda bo'lsa
  if (
    authenticated &&
    user?.role !== "instructor" &&
    (location.pathname.startsWith("/instructor") ||
      location.pathname.startsWith("/auth"))
  ) {
    return <Navigate to="/home" replace />;
  }

  // 3. Foydalanuvchi `instructor` va `instructor` sahifasida emas
  if (
    authenticated &&
    user?.role === "instructor" &&
    !location.pathname.startsWith("/instructor")
  ) {
    return <Navigate to="/instructor" replace />;
  }

  // 4. Agar barcha shartlar bajarilsa, komponentni ko'rsatish
  return <Fragment>{element}</Fragment>;
};

export default RouteGuard;
