import { useRouter } from "next/router";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
// import ERPModal from "./ERPModal";
import "react-toastify/dist/ReactToastify.css";
import {
  TextField2 as TextField,
  TextArea,
  SelectField,
  FileField,
} from "../common/InputField";
import useFileUpload from "../Hooks/useFileUpload";

const API_URL = "https://boolalgback.herokuapp.com/erpData";

function SchoolManagementForm() {
  // const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const initialvalues = {
    institution_name: "",
    institution_type: "",
    institution_medium: "",
    institution_category: "",
    total_students: "",
    city: "",
    country: "",
    zip_code: "",
    address: "",
    website: "",
    establishment_year: "",
    institution_email: "",
    principle_name: "",
    principle_email: "",
    phone_no: "",
    mobile_no: "",
    principle_phone_no: "",
    logo: "",
  };

  const validate = Yup.object({
    institution_name: Yup.string().required("Institution Name is required"),
    institution_type: Yup.string().required("Institution Type is required"),
    institution_medium: Yup.string().required("Institution Medium is required"),
    institution_category: Yup.string().required(
      "Institution Category is required"
    ),
    total_students: Yup.string().required("Total Students is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    zip_code: Yup.string().required("Zip Code is required"),
    address: Yup.string().required("Address is required"),
    // website: Yup.string().required("Website is required"),
    establishment_year: Yup.string().required("Establishment Year is required"),
    institution_email: Yup.string().required(" Institution Email is required"),
    principle_name: Yup.string().required("Principle Name is required"),
    principle_email: Yup.string().required("Principle Email is required"),
    phone_no: Yup.string().required("Phone No is required"),
    mobile_no: Yup.string().required("Mobile No is required"),
    principle_phone_no: Yup.string().required("Principle Phone No is required"),
    logo: Yup.string().required("Logo is required"),
  });

  const { fileUpload, imagePreview } = useFileUpload();

  const handleSubmit = (values) => {
    console.log(values);
  };

  // const handleSubmit = async (values, formik) => {
  //   const res = await fetch(`${API_URL}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(values),
  //   });

  //   if (res.ok) {
  //     toast.success("Form Submitted Successfully!");
  //     // setShowModal(true);
  //     console.log(res);
  //     router.push("/user");
  //     // formik.resetForm();
  //   } else {
  //     console.log("status", res.status);
  //     toast.error("Something went wrong!");
  //   }
  // };

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
              <div className="grid grid-cols-1 md:grid-cols-2 text-sm gap-x-8 gap-y-5 md:gap-y-7">
                <TextField
                  label="Institution Name *"
                  name="institution_name"
                  type="text"
                />
                {/* <SelectField
                  label="Institution Type *"
                  name="institution_type"
                  type="text"
                /> */}
                <SelectField
                  label="Institution Type *"
                  name="institution_type"
                  type="text"
                  placeholder="Select Insitutution Type"
                  options={[
                    "Kindergarten",
                    "School",
                    "High School",
                    "College",
                    "All",
                  ]}
                />
                <SelectField
                  label="Institution Medium *"
                  name="institution_medium"
                  type="text"
                  placeholder="Select Insitutution Medium"
                  options={["Bangla", "English", "English Version"]}
                />
                <SelectField
                  label="Institution Category *"
                  name="institution_category"
                  type="text"
                  placeholder="Select Insitutution Category"
                  options={["Government", "Private"]}
                />
                <TextField
                  label="Total Students *"
                  name="total_students"
                  type="number"
                />
                <TextField label="City *" name="city" type="text" />
                <TextField label="Country *" name="country" type="text" />
                <TextField label="Zip Code *" name="zip_code" type="number" />
                <TextField label="Address *" name="address" type="text" />
                <TextField label="Website" name="website" type="text" />
                <TextField
                  label="Establishment Year"
                  name="establishment_year"
                  type="date"
                />
                <TextField
                  label="Institution Email"
                  name="institution_email"
                  type="email"
                />
                <TextField
                  label="Principle Name"
                  name="principle_name"
                  type="text"
                />
                <TextField
                  label="Principle Email"
                  name="principle_email"
                  type="email"
                />

                <TextField label="Phone No *" name="phone_no" type="text" />
                <TextField label="Mobile No *" name="mobile_no" type="text" />
                <TextField
                  label="Principle Phone No *"
                  name="principle_phone_no"
                  type="text"
                />
              </div>
              <div className="my-4">
                <FileField
                  name="logo"
                  label="Logo *"
                  handleChange={(e) => fileUpload(e, formik)}
                  imagePreview={imagePreview}
                />
              </div>
              <button
                type="submit"
                className="mt-5 px-9 py-3 border-2 border-custom-orange text-custom-orange text-[11px] tracking-widest font-bold bg-transparent hover:bg-custom-orange  hover:text-white transition duration-300 uppercase"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>

      {/* <ERPModal showModal={showModal} setShowModal={setShowModal} /> */}
    </div>
  );
}

export default SchoolManagementForm;
