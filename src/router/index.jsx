import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home.jsx";
import DataClick from "../pages/DataClick.jsx";
import LegalClick from "../pages/LegalCLick.jsx";
import LegalCheck from "../pages/LegalCheck.jsx";
import QrCertCode from "../pages/QrCertCode.jsx";
import BarCertCode from "../pages/BarCertCode.jsx";
import About from "../pages/About.jsx";
import IacTech from "../pages/IacTech.jsx";
import MSCShipping from "../pages/MSCShipping.jsx";
import App from "../App.jsx";
import SkyItalia from "../pages/SkyItalia.jsx";
import BankingSector from "../pages/BankingSector.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="iac-tech" element={<IacTech />} />
      <Route path="/services">
        <Route path="data-click" element={<DataClick />} />
        <Route path="legal-click" element={<LegalClick />} />
        <Route path="legal-check" element={<LegalCheck />} />
        <Route path="QrCertCode" element={<QrCertCode />} />
        <Route path="BarCertCode" element={<BarCertCode />} />
      </Route>
      <Route path="/work">
        <Route path="msc-shipping" element={<MSCShipping />} />
        <Route path="sky-italia" element={<SkyItalia />} />
        <Route path="banking-sector" element={<BankingSector />} />
      </Route>
    </Route>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
