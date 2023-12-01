
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import ChangePassword from "./components/ChangePassword";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import OtpPage from "./components/OtpPage";
import Registration from "./components/Registration";

function App() {

  
 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
        path="/"
        element={<Registration />}
      ></Route>
      <Route
        path="/otp/:email"
        element={<OtpPage />}
      ></Route>
      <Route
        path="/login"
        element={<Login />}
      ></Route>
      <Route
        path="/forgotpassword"
        element={<ForgotPassword />}
      ></Route>
      <Route
        path="/changepassword/:email"
        element={<ChangePassword />}
      ></Route>
      </Route>
    )
  );

  return (
    <>
    <RouterProvider router={router} />
     
    </>
  )
}

export default App
