import { ErrorMessage, Field } from "formik";

export const TextField = ({ ...props }) => {
  return (
    <div className="my-3 relative">
      <Field
        className="w-[250px] lg:w-[360px] outline-none py-2 border-b-2 border-gray-300 focus:border-red-500"
        {...props}
      />
      <p className="absolute -bottom-4 text-red-500 text-xs">
        <ErrorMessage {...props} />
      </p>
    </div>
  );
};

export const TextField2 = ({ label, ...props }) => {
  return (
    <div className="">
      <label {...props}>{label}</label>
      <div className="my-2 relative">
        <Field
          className="p-2 w-full outline-none border border-slate-300 focus:border-red-500"
          {...props}
        />
        <p className="absolute -bottom-4 text-red-500 text-xs">
          <ErrorMessage {...props} />
        </p>
      </div>
    </div>
  );
};

export const TextArea = ({ label, ...props }) => {
  return (
    <div className="mb-2 col-start-1 md:col-end-3">
      <label {...props}>{label}</label>
      <div className="my-2 relative">
        <Field
          as="textarea"
          rows="3"
          className="p-2 w-full outline-none border border-slate-300 focus:border-red-500"
          {...props}
        />
        <p className="absolute -bottom-4 text-red-500 text-xs">
          <ErrorMessage {...props} />
        </p>
      </div>
    </div>
  );
};
