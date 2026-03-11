import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
