import { Link } from "react-router-dom";
import { useCart } from "../../store";

export default function OrderSummry() {
  const { items } = useCart();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="bg-grayDark border border-gray-800 rounded-xl p-8 h-fit sticky top-24">
      <h2 className="text-4xl font-bold mb-8">Order Summary</h2>

      <div className="flex justify-between text-xl mb-4">
        <span>Products</span>
        <span>{items.length}</span>
      </div>

      <div className="flex justify-between text-xl mb-4">
        <span>Shipping</span>
        <span className="text-green-400">Free</span>
      </div>

      <hr className="border-gray-700 my-6" />

      <div className="flex justify-between text-xl mb-4">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-3xl font-bold">
        <span>Total</span>
        <span className="text-red">${subtotal.toFixed(2)}</span>
      </div>

      <div className="space-y-5 pt-10">
        <Link
          to="/checkout"
          className="block w-full text-center bg-red py-4 rounded-lg text-xl font-bold hover:bg-white hover:text-red transition duration-300"
        >
          Checkout
        </Link>

        <Link
          to="/shop"
          className="block w-full text-center border-2 border-red py-4 rounded-lg text-xl font-bold hover:bg-red transition duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
