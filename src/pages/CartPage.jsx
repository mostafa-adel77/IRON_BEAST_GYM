import { Link } from "react-router-dom";
import { useCart } from "../store";
import OrderSummry from "../components/CartComponents/OrderSummry";
import CardCartProduct from "../components/CartComponents/CardCartProduct";

export default function CartPage() {
  const { items } = useCart();

  return (
    <div className="min-h-screen bg-black text-white font-oswald py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-black mb-3">
          Shopping <span className="text-red">Cart</span>
        </h1>
        <p className="text-gray text-xl mb-12">
          Review your selected products before checkout.
        </p>

        {items.length === 0 ? (
          <div className="text-center py-32">
            <h2 className="text-4xl font-bold mb-5">Your Cart is Empty</h2>
            <p className="text-gray text-xl mb-10">
              Looks like you haven't added anything yet.
            </p>
            <Link
              to="/shop"
              className=" bg-red px-10 py-4 rounded-lg text-xl font-bold hover:bg-white hover:text-red transition duration-300"
            >
              ⬅️ Go Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <CardCartProduct key={item.documentId} item={item} />
              ))}
            </div>
            <OrderSummry />
          </div>
        )}
      </div>
    </div>
  );
}
