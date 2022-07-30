import { useField, ErrorMessage } from "formik";

function TextField2({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <div className="my-2 relative">
        {props.textarea ? (
          <textarea
            className="p-2 w-full outline-none border border-slate-300 focus:border-red-500"
            rows="3"
            id={field.name}
            {...field}
            {...props}
          />
        ) : (
          <input
            className="p-2 w-full outline-none border border-slate-300 focus:border-red-500"
            id={field.name}
            {...field}
            {...props}
          />
        )}
        <p className="absolute -bottom-4 text-red-500 text-xs">
          <ErrorMessage name={field.name} />
        </p>
      </div>
    </div>
  );
}

export default TextField2;
