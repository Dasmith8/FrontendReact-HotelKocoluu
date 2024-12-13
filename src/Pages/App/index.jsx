import { useRoutes, BrowserRouter } from "react-router-dom";
import Catalog from "../Catalog";
import Navbar from "../../components/Navbar";
import Contact from "../Contact";
import AboutUs from "../AboutUs";
import Home from "../Home";
import Chatbot from "../../components/Interface";
import NotFound from "../NotFound";
import "./App.css";



const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/catalog", element: <Catalog /> },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/contact", element: <Contact /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};
const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
     <Chatbot/>
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
