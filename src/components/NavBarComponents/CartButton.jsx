import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../../store";

export default function CartButton({ onClick }) {
  const { items } = useCart();

  return (
    <button className="relative" onClick={onClick}>
      <IoCartOutline className="text-3xl text-white hover:text-red cursor-pointer transition duration-300" />

      {items.length > 0 && (
        <span className="absolute -top-2 left-5 flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-white text-red text-xs font-bold">
          {items.length}
        </span>
      )}
    </button>
  );
}
