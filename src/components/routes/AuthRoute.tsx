import { Outlet, Navigate } from "react-router-dom";
function AuthRoute() {
  //авторизация пользователя
  const auth = false;
  return auth ? <Outlet /> : <Navigate to="home" />;
}

export default AuthRoute;
