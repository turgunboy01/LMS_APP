import { Route, Routes } from "react-router-dom";
import AuthPage from "./page/auth";
import RouteGuard from "./components/route-guard";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context";
import InstructorDashboardPage from "./page/instructor";
import StudentViewCommonLayout from "./components/student-view/common-layout";
import StudentHomePage from "./page/student/home";
import NotFoundPage from "./page/not-found";
import AddNewCourse from "./page/instructor/add-new-course";

const App = () => {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      <Routes>
        <Route
          path="/auth"
          element={
            <RouteGuard
              element={<AuthPage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="/instructor"
          element={
            <RouteGuard
              element={<InstructorDashboardPage />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="/instructor/create-new-course"
          element={
            <RouteGuard
              element={<AddNewCourse />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        />
        <Route
          path="/"
          element={
            <RouteGuard
              element={<StudentViewCommonLayout />}
              authenticated={auth?.authenticate}
              user={auth?.user}
            />
          }
        >
          <Route path="home" element={<StudentHomePage />} />
          <Route path="" element={<StudentHomePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
