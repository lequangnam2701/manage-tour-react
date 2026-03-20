import { Outlet } from "react-router-dom";
import Header from "../../website/layout/Header";
import Footer from "../../website/layout/Footer";

function UserLayout() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default UserLayout;
