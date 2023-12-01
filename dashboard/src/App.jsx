
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Registration from "./components/Registration";
import OtpPage from "./components/OtpPage";
import Login from "./components/Login";

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
