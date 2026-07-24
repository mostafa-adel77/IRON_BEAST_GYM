import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { domain, useCart } from "../../store";
export default function CardCartProduct({ item }) {
  const { inCrementQty, deCrementQty, removeItem } = useCart();
  return (
    <div
      key={item.documentId}
      className="bg-grayDark border border-gray-800 rounded-xl p-5 flex flex-col md:flex-row gap-6 items-center"
    >
      <img
        src={domain + item.img?.url}
        className="w-40 h-40 rounded-lg object-cover"
      />

      <div className="flex-1 space-y-3">
        <p className="text-gray uppercase">{item.category?.catName}</p>
        <h2 className="text-3xl font-bold">{item?.name}</h2>
        <p className="text-red text-2xl font-bold">${item?.price}</p>
      </div>

      <button
        onClick={() => deCrementQty(item.documentId)}
        className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-red transition duration-300 cursor-pointer rounded-l-lg"
      >
        <FaMinus />
      </button>

      <span className="w-14 h-12 flex items-center justify-center text-xl font-bold bg-black">
        {item.qty}
      </span>

      <button
        onClick={() => inCrementQty(item.documentId)}
        className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-red transition duration-300 cursor-pointer rounded-r-lg"
      >
        <FaPlus />
      </button>

      <div className="text-center">
        <p className="text-xl font-bold text-red">
          ${(item.price * item.qty).toFixed(2)}
        </p>

        <button
          onClick={() => removeItem(item.documentId)}
          className="text-red mt-4 hover:text-white transition cursor-pointer"
        >
          <FaTrash size={20} />
        </button>
      </div>
    </div>
  );
}
