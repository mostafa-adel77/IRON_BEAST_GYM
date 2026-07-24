import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as Yup from "yup";
import axios from "axios";
import { domainLogin, useAuth } from "../store";
import toast from "react-hot-toast";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { jwt } = useAuth();

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const handleSubmit = (values) => {
    axios
      .post(domainLogin + "/api/auth/local/register", values)
      .then(() => {
        toast.success("You Registered Successfully . 💯💯");
        navigate("/login");
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
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-20 font-oswald">
      <div className="w-full max-w-md bg-grayDark rounded-2xl p-8 border border-gray-800 shadow-xl">
        <h1 className="text-5xl font-black text-center text-white mb-2">
          Create <span className="text-red">Account</span>
        </h1>

        <p className="text-center text-gray mb-8">
          Join us and start your fitness journey.
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-6">
            <div>
              <label className="block text-white mb-2 uppercase">
                Username
              </label>

              <Field
                name="username"
                type="text"
                placeholder="Enter your username"
                className="w-full bg-grayDark border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-red transition"
              />

              <ErrorMessage
                name="username"
                component="p"
                className="text-red mt-2 text-sm"
              />
            </div>

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
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray hover:text-red transition"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <ErrorMessage
                name="password"
                component="p"
                className="text-red mt-2 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red hover:bg-red-700 transition py-3 rounded-lg text-white font-bold uppercase tracking-wider cursor-pointer"
            >
              Sign Up
            </button>
          </Form>
        </Formik>

        <p className="text-center text-white mt-8">
          Already have an account?
          <Link to="/login" className="text-red hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
