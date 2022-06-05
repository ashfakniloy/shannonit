import { useRouter } from "next/router";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "../../components/TextField2";

const API_URL = "https://boolalgback.herokuapp.com/login";

function AdminPage() {
  const router = useRouter();

  const initialvalues = {
    email: "",
    password: "",
  };

  const validate = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, formik) => {
    const { email, password } = values;

    const res = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.text === "success") {
      // toast.success("Success!");
      router.push("/admin/dashboard");
      localStorage.setItem("token-shannonit", data.token);
    } else if (data.text === "not found") {
      toast.error("Email not found");
    } else if (data.text === "failure") {
      toast.error("Wrong Password");
    } else {
      toast.error("Something went wrong!");
      console.log(res);
    }
  };

  return (
    <div className="bg-custom-gray h-screen">
      <div className="flex justify-center pt-24 lg:pt-44">
        <div className="bg-gray-200 flex flex-col p-7 lg:p-10 shadow-lg">
          <h1 className="text-custom-gray text-3xl font-bold text-center ">
            Log In
          </h1>

          <div className="mt-6">
            <Formik
              initialValues={initialvalues}
              validationSchema={validate}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form>
                  <ToastContainer />
                  <div className="text-sm">
                    <div className="w-[300px] md:w-[400px]">
                      <TextField label="Email *" name="email" type="email" />
                    </div>

                    <div className="mt-5 w-[300px] md:w-[400px]">
                      <TextField
                        label="Password *"
                        name="password"
                        type="password"
                        autoComplete="on"
                      />
                    </div>

                    {/* <Link href="#" passHref>
                      <p className="pt-3 cursor-pointer text-red-500">
                        Forget Password?
                      </p>
                    </Link> */}
                  </div>

                  <div className="mt-10 flex justify-start">
                    <button
                      type="submit"
                      className="px-9 py-3 w-full border-2 border-custom-gray text-custom-gray text-[11px] tracking-widest font-bold bg-transparent hover:bg-custom-gray hover:text-white transition duration-300 uppercase"
                    >
                      Submit
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

export default AdminPage;
