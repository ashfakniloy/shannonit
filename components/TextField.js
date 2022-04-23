import { useField, ErrorMessage } from "formik";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="">
      <div className="my-3 relative">
        <label htmlFor={field.name}></label>
        {props.textarea ? (
          <textarea
            className="w-[250px] lg:w-[360px] outline-none py-2 border-b-2 border-gray-300 focus:border-red-500"
            rows="3"
            id={field.name}
            {...field}
            {...props}
          />
        ) : (
          <input
            className="w-[250px] lg:w-[360px] outline-none py-2 border-b-2 border-gray-300 focus:border-red-500"
            id={field.name}
            {...field}
            {...props}
          />
        )}

        <p className="absolute -bottom-4 text-custom-red text-xs">
          <ErrorMessage name={field.name} />
        </p>
      </div>
    </div>
  );
}

export default TextField;
