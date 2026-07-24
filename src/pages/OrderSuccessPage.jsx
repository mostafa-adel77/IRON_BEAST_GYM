import { Link, useNavigate } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";
import { useEffect } from "react";
import { useAuth, useCart } from "../store";

export default function OrderSuccessPage() {
  const navigate = useNavigate();
  const { jwt } = useAuth();
  const { clearCart } = useCart();
  useEffect(() => {
    if (!jwt) {
      navigate("/login");
      return;
    }
    const order = sessionStorage.getItem("lastOrder");
    if (!order) {
      navigate("/cart");
      return;
    }
    clearCart();
    sessionStorage.removeItem("lastOrder");
  }, [jwt, navigate, clearCart]);
  return (
    <div className="min-h-screen bg-black flex items-center justify-center font-oswald px-5">
      <div className="bg-grayDark border border-gray-800 rounded-2xl p-12 text-center max-w-xl w-full">
        <FaCircleCheck className="text-green-500 text-8xl mx-auto mb-6" />

        <h1 className="text-5xl font-black text-white">
          Order
          <span className="text-red"> Successfull</span>
        </h1>

        <p className="text-gray text-xl mt-6">
          Thank you for your purchase.
          <br />
          Your order has been placed successfully.
        </p>

        <div className="flex justify-center gap-5 mt-10">
          <Link
            to="/shop"
            className="bg-red px-8 py-3 rounded-lg text-white font-bold hover:bg-white hover:text-red transition"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="border border-red px-8 py-3 rounded-lg text-white font-bold hover:bg-red transition"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
