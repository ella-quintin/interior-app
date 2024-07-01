import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/landing";
import AboutUs from "./pages/about-us";
import Collections from "./pages/collection";
import ContactUs from "./pages/contact-us";
import RootLayout from "./layouts/rootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/collection",
          element: <Collections />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        }
      ],
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
