import { useState } from "react";

function useFileUpload() {
  const url = "https://api.cloudinary.com/v1_1/niloy56/image/upload";

  const [imagePreview, setImagePreview] = useState("");

  const fileUpload = async (e, formik) => {
    const files = e.target.files;
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "u9pqvof1");

    // console.log([...formData.entries()]);

    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      console.log("success", data.secure_url);
      setImagePreview(data.secure_url);
      formik.setFieldValue("logo", data.secure_url);
    } else {
      console.log("failed", data);
    }
  };

  return {
    fileUpload,
    imagePreview,
  };
}

export default useFileUpload;
