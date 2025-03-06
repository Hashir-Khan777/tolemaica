import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home.jsx";
import DataClick from "../pages/DataClick.jsx";
import LegalClick from "../pages/LegalCLick.jsx";
import IacTech from "../pages/IacTech.jsx";
import App from "../App.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="data-click" element={<DataClick />} />
      <Route path="legal-click" element={<LegalClick />} />
      <Route path="iac-tech" element={<IacTech />} />
      <Route path="about" element={<Home />} />
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
