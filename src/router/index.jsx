import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";
import IacTech from "../pages/IacTech.jsx";
import App from "../App.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="iac-tech" element={<IacTech />} />
      <Route path="about" element={<Home />} />
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
