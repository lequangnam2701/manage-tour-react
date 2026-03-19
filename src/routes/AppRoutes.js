import { BrowserRouter, Routes, Route } from "react-router-dom";

import CategoryAdd from "../pages/admin/category/CategoryAdd";
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
import TourList from "../pages/admin/tour/TourList";
import Layout from "../pages/admin/layout/Layout";
import Login from "../pages/admin/login/Login";
import UserLayout from "../pages/website/layout/UserLayout";
import Home from "../pages/website/home/home";
import Register from "../pages/website/Register/Register";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Profile from "../pages/admin/layout/Profile";
import TourDetails from "../pages/website/tour/TourDetails";
import HotelPage from "../pages/website/Hotel/HotelPage";
import SearchBox from "../pages/website/Hotel/SearchBox";
import ProfileUser from "../pages/website/layout/Profile";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/hotels" element={<HotelPage />} />
          <Route path="/SearchBox" element={<SearchBox />} />
          <Route path="/profile" element={<ProfileUser />} />
         
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="/admin/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />

          <Route path="tours" element={<TourList />} />
          <Route path="tours/edit/:id" element={<TourEdit />} />
          <Route path="tour/add" element={<TourCreate />} />

          <Route path="users" element={<UserList />} />
          <Route path="users/create" element={<UserCreate />} />
          <Route path="users/edit/:id" element={<UserEdit />} />

          <Route path="category" element={<CategoryList />} />
          <Route path="category/add" element={<CategoryAdd />} />

          <Route path="rates" element={<RateList />} />

          <Route path="best-seller" element={<BestSeller />} />
          <Route path="revenue" element={<RevenueChart />} />
          <Route path="revenue/year/:year" element={<RevenueYear />} />

          <Route path="books" element={<BookList />} />
          <Route path="books/:id" element={<BookDetail />} />
          <Route path="/admin/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
