import toast from "react-hot-toast";
import { create } from "zustand";

export const domain = "http://localhost:1337";
export const domainLogin = "https://store.skyready.online";

export const useCart = create((set) => ({
  items: [],

  addToCart: (newProduct) =>
    set((state) => {
      const products = [...state.items];
      const index = products.findIndex(
        (item) => item.documentId == newProduct.documentId,
      );

      if (index == -1) {
        products.push({
          ...newProduct,
          qty: 1,
        });
        toast.success(`The ${newProduct.name} Added Successfully 💯💯`);
      } else {
        products[index].qty++;
        toast.success(`The Qty Changed To: ${products[index].qty} 💯💯`);
      }

      return { items: products };
    }),

  inCrementQty: (documentId) =>
    set((state) => {
      const products = [...state.items];
      const index = products.findIndex((item) => item.documentId == documentId);
      products[index].qty++;
      toast.success(`The Qty Changed To: ${products[index].qty} 💯💯`);
      return { items: products };
    }),

  deCrementQty: (documentId) =>
    set((state) => {
      const products = [...state.items];
      const index = products.findIndex((item) => item.documentId == documentId);
      if (products[index].qty > 1) {
        products[index].qty--;
        toast.success(`The Qty Changed To: ${products[index].qty} 💯💯`);
      } else {
        products.splice(index, 1);
        toast.success("The Product Remove From Cart. 💯💯");
      }
      return { items: products };
    }),

  removeItem: (documentId) =>
    set((state) => {
      const products = [...state.items];
      const index = products.findIndex((item) => item.documentId == documentId);
      products.splice(index, 1);
      toast.success("The Product Remove From Cart. 💯💯");
      return { items: products };
    }),

  clearCart: () => set({ items: [] }),
}));

export const useAuth = create((set) => ({
  jwt: localStorage.getItem("jwt") || sessionStorage.getItem("jwt"),
  userName: "",
  isAdmin: false,

  login: ({ jwt, userName, isAdmin, remember = true }) => {
    if (remember) {
      localStorage.setItem("jwt", jwt);
    } else {
      sessionStorage.setItem("jwt", jwt);
    }

    set({
      jwt,
      userName,
      isAdmin,
    });
  },

  setUser: (userName, isAdmin) =>
    set({
      userName,
      isAdmin,
    }),

  logout: () => {
    localStorage.clear();
    sessionStorage.clear();

    set({
      jwt: null,
      userName: "",
      isAdmin: false,
    });
  },
}));
