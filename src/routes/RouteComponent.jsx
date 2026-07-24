import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import TeamPage from "../pages/TeamPage";
import ShopPage from "../pages/ShopPage";
import ContactPage from "../pages/ContactPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import DetailsProductPage from "../pages/DetailsProductPage";
import CheckOutPage from "../pages/CheckOutPage";
import OrderSuccessPage from "../pages/OrderSuccessPage";
import NotFoundPage from "../pages/NotFoundPage";
export default function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="shop/:productId" element={<DetailsProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckOutPage />} />
        <Route path="/success" element={<OrderSuccessPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
