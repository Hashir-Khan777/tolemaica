import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home.jsx";
import App from "../App.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="services" element={<Home />} />
      <Route path="iac-tech" element={<Home />} />
      <Route path="about" element={<Home />} />
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
