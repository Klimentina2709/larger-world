import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import About from "./About";
import HowItWorks from "../pages/HowItWorks";
import MemberShip from "../pages/MemberShip";
import NavBar from "../components/NavBar";
import Contact from "./Contact";
import PlanetEarth from "./PlanetEarth";
import Explore from "./Explore";
import BlackPage from "../components/BlackPage";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/about", element: <About /> },
      { path: "/howitworks", element: <HowItWorks /> },
      { path: "/membership", element: <MemberShip /> },
      { path: "/contact", element: <Contact /> },
      { path: "/explore", element: <Explore /> },
      { path: "/horizontal", element: <PlanetEarth /> },
      { path: "/black", element: <BlackPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
