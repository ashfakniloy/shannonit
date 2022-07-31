import Image from "next/image";
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

export const SelectField = ({ label, options, placeholder, ...props }) => {
  return (
    <div className="mb-2">
      <label {...props}>{label}</label>
      <div className="my-2 relative">
        <Field
          as="select"
          {...props}
          className="p-2 w-full outline-none border border-slate-300 focus:border-red-500"
        >
          <option
            value=""
            className="text-slate-400"
            defaultValue={true}
            hidden
          >
            {placeholder}
          </option>
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </Field>
        <p className="absolute -bottom-4 text-red-500 text-xs">
          <ErrorMessage {...props} />
        </p>
      </div>
    </div>
  );
};

export const FileField = ({ label, name, handleChange, imagePreview }) => {
  return (
    <div className="text-sm">
      <div className="relative flex flex-col">
        <label htmlFor="name">{label}</label>
        <input type="file" id={name} className="mt-1" onChange={handleChange} />
        <p className="absolute -bottom-4 text-red-500 text-xs">
          <ErrorMessage name={name} />
        </p>
      </div>
      <div className="mt-2">
        {imagePreview && (
          <Image src={imagePreview} alt={name} width={60} height={60} />
        )}
      </div>
    </div>
  );
};
