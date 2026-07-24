import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth, useCart } from "../store";
import toast from "react-hot-toast";

export default function CheckOutPage() {
  const { items } = useCart();
  const { jwt } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!jwt) {
      navigate("/login");
      return;
    }
    if (items.length === 0) {
      navigate("/cart");
    }
  }, [jwt, items, navigate]);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const total = subtotal - discount;

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (code === "IRON_BEAST") {
      setDiscount(subtotal * 0.1);
      toast.success("Coupon Applied Successfully 🎉");
    } else {
      setDiscount(0);
      toast.error("Invalid Coupon");
    }
  };

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{11}$/, "Phone must be 11 digits")
      .required("Phone is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
  });

  const handleSubmit = (values) => {
    const order = {
      customer: values,
      products: items,
      paymentMethod,
      subtotal,
      discount,
      total,
    };
    sessionStorage.setItem("lastOrder", JSON.stringify(order));
    toast.success("Order Placed Successfully 🎉");
    navigate("/success");
  };

  return (
    <div className="min-h-screen bg-black text-white font-oswald py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-black mb-3">
          Check<span className="text-red">Out</span>
        </h1>
        <p className="text-gray text-xl mb-12">
          Complete your order information.
        </p>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-grayDark border border-gray-800 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-8">Billing Details</h2>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="space-y-6">
                <Field
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red"
                />
                <ErrorMessage
                  name="fullName"
                  component="p"
                  className="text-red"
                />

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <Field
                      name="email"
                      placeholder="Email"
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red"
                    />
                  </div>

                  <div>
                    <Field
                      name="phone"
                      placeholder="Phone"
                      className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red"
                    />
                    <ErrorMessage
                      name="phone"
                      component="p"
                      className="text-red"
                    />
                  </div>
                </div>

                <Field
                  name="address"
                  placeholder="Address"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red"
                />
                <ErrorMessage
                  name="address"
                  component="p"
                  className="text-red"
                />

                <Field
                  name="city"
                  placeholder="City"
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red"
                />
                <ErrorMessage name="city" component="p" className="text-red" />

                <div>
                  <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
                  <div className="flex flex-col gap-4">
                    <label className="flex items-center gap-3 bg-black border border-gray-700 rounded-lg p-4 cursor-pointer">
                      <input
                        type="radio"
                        checked={paymentMethod === "cash"}
                        onChange={() => setPaymentMethod("cash")}
                      />
                      Cash On Delivery
                    </label>

                    <label className="flex items-center gap-3 bg-black border border-gray-700 rounded-lg p-4 cursor-pointer">
                      <input
                        type="radio"
                        checked={paymentMethod === "visa"}
                        onChange={() => setPaymentMethod("visa")}
                      />
                      Visa / MasterCard
                    </label>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Coupon Code</h2>
                  <div className="flex gap-3">
                    <input
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      placeholder="Enter Coupon"
                      className="flex-1 bg-black border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red"
                    />

                    <button
                      type="button"
                      onClick={applyCoupon}
                      className="bg-red px-6 cursor-pointer rounded-lg font-bold hover:bg-white hover:text-red transition"
                    >
                      Apply
                    </button>
                  </div>

                  <p className="text-gray mt-2">
                    Try: <span className="text-red">IRON_BEAST</span>
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer bg-red py-4 rounded-lg font-bold uppercase hover:bg-white hover:text-red transition"
                >
                  Place Order
                </button>
              </Form>
            </Formik>
          </div>

          <div className="bg-grayDark border border-gray-800 rounded-xl p-8 h-fit sticky top-24">
            <h2 className="text-3xl font-bold mb-8">Order Summary</h2>

            <div className="space-y-5">
              {items.map((item) => (
                <div
                  key={item.documentId}
                  className="flex justify-between border-b border-gray-800 pb-4"
                >
                  <div>
                    <h3>{item.name}</h3>
                    <p className="text-gray">Qty : {item.qty}</p>
                  </div>

                  <span className="text-red">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-700 mt-8 pt-6 space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Discount</span>

                <span className="text-green-400">-${discount.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>

                <span className="text-red">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
