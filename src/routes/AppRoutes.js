import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Login from "../pages/admin/login/Login";
import CategoryAdd from "../pages/admin/category/CategoryAdd";
import TourList from "../pages/admin/tour/TourList";
import TourEdit from "../pages/admin/tour/TourEdit";
import CategoryList from "../pages/admin/category/CategoryList";
import UserList from "../pages/admin/user/UserList";
import TourCreate from "../pages/admin/tour/TourCreate";
import RateList from "../pages/admin/rate/RateList";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import BestSeller from "../pages/admin/Statistical/BestSeller";
import RevenueChart from "../pages/admin/Statistical/RevenueChart";
import RevenueYear from "../pages/admin/Statistical/RevenueYear";
import BookList from "../pages/admin/book/BookList";
import BookDetail from "../pages/admin/book/BookDetail";
import UserCreate from "../pages/admin/user/UserCreate";
import UserEdit from "../pages/admin/user/UserEdit";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="tours" element={<TourList />} />
          <Route path="users" element={<UserList />} />
          <Route path="tours/edit/:id" element={<TourEdit />} />
          <Route path="tour/add" element={<TourCreate />} />
          <Route path="category" element={<CategoryList />} />
          <Route path="category/add" element={<CategoryAdd />} />
          <Route path="rates" element={<RateList />} />
          <Route path="best-seller" element={<BestSeller />} />
          <Route path="revenue" element={<RevenueChart />} />
          <Route path="revenue/year/:year" element={<RevenueYear />} />
          <Route path="books" element={<BookList />} />
          <Route path="books/:id" element={<BookDetail />} />
          <Route path="users/create" element={<UserCreate />} />
          <Route path="/users/edit/:id" element={<UserEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
