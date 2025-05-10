import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-dvh">
      <Outlet />
    </div>
  );
};

export default Layout;
