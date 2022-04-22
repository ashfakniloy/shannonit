import * as Yup from "yup";
import { useFormik, Formik, Form } from "formik";
import { MdPhoneInTalk, MdEmail, MdLocationPin } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "./TextField";
// import Image from "next/image";

const API_URL = "https://boolalgback.herokuapp.com/saveinfo";

function ContactInfo() {
  const initialvalues = {
    name: "",
    email: "",
    number: "",
    message: "",
  };

  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required"),
    number: Yup.string().required("Number is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values) => {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      body: JSON.stringify(values),
    });

    if (res.ok) {
      toast.success("Submitted Successfully!");
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="bg-white">
      <ToastContainer />
      <div className="lg:container py-16 px-4 lg:py-44">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="lg:self-center">
            <h1 className="heading-lg">Contact Information</h1>
            <p className="mt-4 lg:mt-6 text-custom-gray3">
              Just make one call and get a reply within one minute. If email is
              the preferable way of communication for you, you are welcome to
              contact us just right now. Your personal manager will take into
              consideration all your requires with pleasure.
            </p>
            <div className="flex flex-col gap-7 lg:gap-10 mt-7 lg:mt-10  text-custom-gray3">
              <div className="flex items-center gap-5 ">
                <MdPhoneInTalk className="text-4xl fill-custom-orange" />

                <a href="https://api.whatsapp.com/send?phone=+8801743136127">
                  +8801743136127
                </a>
              </div>
              <div className="flex items-center gap-5 ">
                <MdEmail className="text-4xl fill-custom-orange" />

                <a href="mailto:rana.buddy@gmail.com">rana.buddy@gmail.com</a>
              </div>
              <div className="flex items-center gap-5 ">
                <MdLocationPin className="text-4xl fill-custom-orange" />

                <p>41/14-A Afsar Uddin Lane,1209, Zigatola - Dhaka</p>
              </div>
            </div>
          </div>

          <div className="lg:place-self-end border-[16px] border-[#dfddce] p-6 lg:p-10">
            <div className="text-center heading-lg leading-snug lg:text-[26px]">
              <h1>Have questions?</h1>
              <h1>We call you back!</h1>
            </div>

            <Formik
              initialValues={initialvalues}
              validationSchema={validate}
              onSubmit={(values, { resetForm }) => {
                console.log("Submitted values", values);
                handleSubmit(values);
                resetForm();
              }}
            >
              {(formik) => (
                <Form>
                  <div className="mt-3 flex flex-col items-center text-sm text-custom-gray3">
                    <TextField
                      placeholder="Your Name *"
                      name="name"
                      type="text"
                    />
                    <TextField placeholder="Email *" name="email" type="text" />
                    <TextField
                      placeholder="Phone Number *"
                      name="number"
                      type="text"
                    />
                    <TextField
                      placeholder="Service You Are Looking For *"
                      name="message"
                      type="text"
                      textarea="true"
                    />

                    <button
                      type="submit"
                      className="mt-7 lg:mt-9 bg-custom-orange text-white px-5 lg:px-8 py-3 rounded-full uppercase"
                    >
                      send message
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
