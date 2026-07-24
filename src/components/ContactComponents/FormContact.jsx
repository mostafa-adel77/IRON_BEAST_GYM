import { Formik, Form, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

export default function FormContact() {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),

    email: Yup.string().email("Invalid email").required("Email is required"),

    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    toast.success("DATA SEND SUCCESSFULLY !!!");
  };

  return (
    <div className="bg-grayDark grow rounded-2xl border border-gray-800 shadow-2xl p-10 font-oswald">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-8">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-xl uppercase tracking-widest text-gray">
              Name
            </label>

            <Field
              name="name"
              type="text"
              placeholder="Enter your name"
              className="bg-[#222] text-white rounded-lg border border-gray-700 p-4 outline-none focus:border-red"
            />

            <ErrorMessage
              name="name"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-xl uppercase tracking-widest text-gray">
              Email
            </label>

            <Field
              name="email"
              type="email"
              placeholder="Enter your email"
              className="bg-[#222] text-white rounded-lg border border-gray-700 p-4 outline-none focus:border-red"
            />

            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-xl uppercase tracking-widest text-gray">
              Message
            </label>

            <Field
              as="textarea"
              name="message"
              rows="6"
              placeholder="Write your message..."
              className="bg-[#222] text-white rounded-lg border border-gray-700 p-4 outline-none resize-none focus:border-red"
            />

            <ErrorMessage
              name="message"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-fit cursor-pointer bg-red hover:bg-red-700 transition px-10 py-4 rounded-xl text-white text-lg lg:text-2xl font-bold uppercase"
          >
            Send Message
          </button>
        </Form>
      </Formik>
    </div>
  );
}
