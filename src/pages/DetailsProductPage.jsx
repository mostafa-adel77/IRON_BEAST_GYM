import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { domain, useCart } from "../store";
import axios from "axios";
import toast from "react-hot-toast";

export default function DetailsProductPage() {
  let btn = "⬅️ BACK TO SHOP";
  const params = useParams();
  const { inCrementQty, addToCart } = useCart();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(domain + `/api/products/${params.productId}`, {
        params: { populate: "*" },
      })
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => {
        toast.error(
          err.response?.data?.error?.message || "Something went wrong 👎",
        );
      });
  }, []);
  return (
    <div className="py-20 w-full space-y-8">
      <Link to="/shop" className="btn bg-red">
        {btn}
      </Link>
      <div className="flex gap-20">
        <img width={560} src={domain + product.img?.url} alt="" />
        <div className="space-y-5 font-oswald">
          <p className="uppercase text-sm text-red">
            {product.category?.catName}
          </p>
          <h1 className="text-5xl font-black text-white uppercase">
            {product?.name}
          </h1>
          <p className="text-red text-4xl font-black">$ {product?.price}</p>
          <p className="text-xl text-gray">
            Premium 25g whey protein per serving. Fast-absorbing, low sugar,
            supports muscle recovery and growth. Chocolate flavor.
          </p>
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => addToCart(product)}
              className=" border-2 border-red text-white py-3 px-12 rounded-lg font-semibold uppercase transition-all duration-300 hover:bg-red hover:shadow-lg hover:shadow-red/30 active:scale-95 cursor-pointer"
            >
              Buy Now
            </button>
            <button
              onClick={() => inCrementQty(product.documentId)}
              className=" bg-red text-white py-3 px-12 rounded-lg font-semibold uppercase  transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red/40 active:scale-95 cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
