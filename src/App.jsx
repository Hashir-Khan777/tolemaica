import { useEffect } from "react";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
