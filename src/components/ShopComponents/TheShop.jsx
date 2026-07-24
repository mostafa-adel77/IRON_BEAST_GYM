import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { domain } from "../../store";
import toast from "react-hot-toast";

export default function TheShop() {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory == "All"
      ? product
      : product.filter((item) => item.category?.catName == selectedCategory);

  useEffect(() => {
    axios
      .get(domain + "/api/products", {
        params: {
          populate: "*",
        },
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

  useEffect(() => {
    axios
      .get(domain + "/api/categories", {
        params: {
          populate: "*",
        },
      })
      .then((res) => {
        setCategories(res.data.data);
      });
  }, []);
  return (
    <div className="font-oswald py-20 text-center space-y-6">
      <h1 className="text-7xl font-black text-white">
        The<span className="text-red"> Shop</span>
      </h1>
      <p className="text-gray text-2xl">
        Gear that performs. Built for the grind.
      </p>

      <div className="flex justify-center gap-4 flex-wrap pt-20">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-8 py-3 rounded-full uppercase transition duration-300 cursor-pointer
      ${
        selectedCategory == "All"
          ? "bg-red text-white"
          : "bg-grayDark text-gray border border-gray-700 hover:bg-red hover:text-white"
      }`}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category.documentId}
            onClick={() => setSelectedCategory(category.catName)}
            className={`px-8 py-3 rounded-full uppercase transition duration-300 cursor-pointer
        ${
          selectedCategory == category.catName
            ? "bg-red text-white"
            : "bg-grayDark text-gray border border-gray-700 hover:bg-red hover:text-white"
        }`}
          >
            {category.catName}
          </button>
        ))}
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((el) => (
          <ProductCard key={el.documentId} el={el} />
        ))}
      </div>
    </div>
  );
}
