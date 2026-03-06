import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import TourList from "../pages/tour/TourList";
import UserList from "../pages/user/UserList";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/tours" element={<TourList />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRoutes;
