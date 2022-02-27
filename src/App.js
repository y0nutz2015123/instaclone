import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

import UserContext from "./context/user.context";

import useAuthListener from "./hooks/use-auth-listener";

import ProtectedRoute from "./helpers/protected-route";

import Loading from "./components/loading.component";

const Login = lazy(() => import("./pages/LoginPage"));
const SignUp = lazy(() => import("./pages/SignUpPage"));
const Dashboard = lazy(() => import("./pages/DashboardPage"));
const Profile = lazy(() => import("./pages/ProfilePage"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route
              path={ROUTES.DASHBOARD}
              element={
                <ProtectedRoute user={user}>
                  <Dashboard user={user} />
                </ProtectedRoute>
              }
              exact
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
