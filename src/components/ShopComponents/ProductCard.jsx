import { Link } from "react-router-dom";
import { domain, useCart } from "../../store";

export default function ProductCard({ el }) {
  const { addToCart } = useCart();
  return (
    <div className="bg-grayDark rounded-lg overflow-hidden border border-gray-800 hover:border-red transition-all duration-300">
      <div className="overflow-hidden">
        <img
          src={domain + el.img?.url}
          className="w-full h-60 object-cover hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-6 text-start space-y-3">
        <p className="uppercase text-sm text-gray">{el.category?.catName}</p>
        <h2 className="text-[21px] font-black text-white uppercase">
          {el?.name}
        </h2>
        <p className="text-red text-4xl font-bold">$ {el?.price}</p>
        <div className="grid grid-cols-2 gap-4">
          <Link
            to={`/shop/${el.documentId}`}
            className="border-2 border-red text-white py-3 px-6 rounded-lg font-bold uppercase hover:bg-red transition text-center"
          >
            Details
          </Link>

          <button
            onClick={() => addToCart(el)}
            className="bg-red text-white py-3 rounded-lg font-bold uppercase hover:bg-red transition cursor-pointer"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
