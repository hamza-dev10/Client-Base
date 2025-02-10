import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const HomeLayout = () => {
  return (
    <div className="container py-4">
      <Header />
      <Outlet />
    </div>
  );
};
export default HomeLayout;
