import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Overview from "./pages/Overview";
import Contacts from "./pages/Contacts";
import Sales from "./pages/Sales";
import Task from "./pages/Task";
import Report from "./pages/Report";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/sales",
        element: <Sales />,
      },
      {
        path: "/task",
        element: <Task />,
      },
      {
        path: "/report",
        element: <Report />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
