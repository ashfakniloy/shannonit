import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import ERPModal from "./ERPModal";
import "react-toastify/dist/ReactToastify.css";
import TextField from "./TextField2";

const API_URL = "https://boolalgback.herokuapp.com/erpData";

function ERP_Form() {
  const [showModal, setShowModal] = useState(false);

  const initialvalues = {
    name: "",
    address: "",
    phone: "",
    mobile: "",
    website: "",
    work: "",
    company: "",
    email: "",
    country: "",
    city: "",
    subject: "",
    message: "",
  };

  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    address: Yup.string().required("Address is required"),
    phone: Yup.string().required("Phone is required"),
    mobile: Yup.string().required("Mobile is required"),
    website: Yup.string().required("Website is required"),
    work: Yup.string().required("Work is required"),
    company: Yup.string().required("Company is required"),
    email: Yup.string().required("Email is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, formik) => {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (res.ok) {
      toast.success("Message sent successfully!");
      setShowModal(true);
      console.log(res);
      formik.resetForm();
    } else {
      console.log("status", res.status);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div>
      <div className="mt-6">
        <Formik
          initialValues={initialvalues}
          validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <ToastContainer />
              <div className="grid grid-cols-2 text-sm gap-x-7 gap-y-5 md:gap-y-7">
                <div className="col-span-2 sm:col-span-1">
                  <TextField label="Name *" name="name" type="text" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <TextField label="Address *" name="address" type="text" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <TextField label="Phone *" name="phone" type="text" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <TextField label="Mobile *" name="mobile" type="text" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <TextField label="Website *" name="website" type="text" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <TextField label="Work *" name="work" type="text" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <TextField label="Company *" name="company" type="text" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <TextField label="Email *" name="email" type="email" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <TextField label="Country *" name="country" type="text" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <TextField label="City *" name="city" type="text" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <TextField label="Subject *" name="subject" type="text" />
                </div>
                <div className="col-span-2">
                  <TextField
                    label="Message *"
                    name="message"
                    type="text"
                    textarea="true"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-start">
                <button
                  type="submit"
                  className="px-9 py-3 border-2 border-custom-orange text-custom-orange text-[11px] tracking-widest font-bold bg-transparent hover:bg-custom-orange  hover:text-white transition duration-300 uppercase"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <ERPModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default ERP_Form;
