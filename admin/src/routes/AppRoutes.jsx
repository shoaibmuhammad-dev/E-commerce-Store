import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import DashboardLayout from "../components/layout/DashboardLayout";
import ProductsPage from "../pages/productManagement/ProductsPage";
import AddProductPage from "../pages/productManagement/AddProductPage";
import UsersPage from "../pages/userManagement/UsersPage";
import OrdersPage from "../pages/orderManagement/OrdersPage";
import ReportsPage from "../pages/reportManagement/ReportsPage";
import SettingsPage from "../pages/settings/SettingsPage";
import ProductPage from "../pages/productManagement/ProductPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoutes>
            <LoginPage />
          </PublicRoutes>
        }
      />

      <Route
        path="/"
        element={
          <PrivateRoutes>
            <DashboardLayout pages={<h1>Home page</h1>} />
          </PrivateRoutes>
        }
      />

      {/* Product management routes */}
      <Route
        path="/products"
        element={
          <PrivateRoutes>
            <DashboardLayout pages={<ProductsPage />} />
          </PrivateRoutes>
        }
      />
      <Route
        path="/products/add-product"
        element={
          <PrivateRoutes>
            <DashboardLayout pages={<AddProductPage />} />
          </PrivateRoutes>
        }
      />
      <Route
        path="/products/:slug"
        element={
          <PrivateRoutes>
            <DashboardLayout pages={<ProductPage />} />
          </PrivateRoutes>
        }
      />

      {/* User management routes */}
      <Route
        path="/users"
        element={
          <PrivateRoutes>
            <DashboardLayout pages={<UsersPage />} />
          </PrivateRoutes>
        }
      />

      {/* Order management routes */}
      <Route
        path="/orders"
        element={
          <PrivateRoutes>
            <DashboardLayout pages={<OrdersPage />} />
          </PrivateRoutes>
        }
      />

      {/* Report management routes */}
      <Route
        path="/reports"
        element={
          <PrivateRoutes>
            <DashboardLayout pages={<ReportsPage />} />
          </PrivateRoutes>
        }
      />

      {/* Setting routes */}
      <Route
        path="/settings"
        element={
          <PrivateRoutes>
            <DashboardLayout pages={<SettingsPage />} />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
