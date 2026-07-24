import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { domainLogin, useAuth } from "../store";
import toast from "react-hot-toast";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, jwt } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const handleSubmit = (values) => {
    const dataSend = {
      identifier: values.email,
      password: values.password,
    };
    axios
      .post(domainLogin + "/api/auth/local", dataSend)
      .then((res) => {
        login({
          jwt: res.data.jwt,
          userName: res.data.user.username,
          isAdmin: res.data.user.email === "adminmostafa@gmail.com",
          remember: values.remember,
        });
        toast.success("You Logged In Successfully 💯💯");
        navigate("/");
      })
      .catch((err) => {
        toast.error(
          err.response?.data?.error?.message || "Something went wrong 👎",
        );
      });
  };

  useEffect(() => {
    if (jwt) {
      navigate("/");
    }
  }, [jwt, navigate]);

  return (
    <div className=" bg-black flex items-center justify-center px-4 font-oswald py-20">
      <div className="w-full max-w-md bg-grayDark rounded-2xl p-8 border border-gray-800 shadow-xl">
        <h1 className="text-5xl font-black text-center text-white mb-2">
          Welcome <span className="text-red">Back</span>
        </h1>

        <p className="text-center text-gray mb-8">
          Login to continue your fitness journey.
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-6">
            <div>
              <label className="block text-white mb-2 uppercase">Email</label>

              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full bg-grayDark border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-red transition"
              />

              <ErrorMessage
                name="email"
                component="p"
                className="text-red mt-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-white mb-2 uppercase">
                Password
              </label>

              <div className="relative">
                <Field
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full bg-grayDark border border-gray-700 rounded-lg px-4 py-3 pr-12 text-white outline-none focus:border-red transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray hover:text-red transition cursor-pointer"
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              </div>

              <ErrorMessage
                name="password"
                component="p"
                className="text-red mt-2 text-sm"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer text-white">
                <Field
                  type="checkbox"
                  name="remember"
                  className="w-5 h-5 accent-red cursor-pointer"
                />
                <span className="text-xl">Remember me</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-red hover:bg-red-700 transition py-3 rounded-lg text-white font-bold uppercase tracking-wider cursor-pointer"
            >
              Login
            </button>
          </Form>
        </Formik>

        <p className="text-center text-white mt-8">
          Don't have an account?
          <Link
            to="/signup"
            className="text-red cursor-pointer hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
