import { forwardRef } from "react";

const TextField = ({ label, type, errors, ...props }, ref) => {
  return (
    <div>
      <label className="text-sm ">{label}</label>

      <div className="flex flex-col">
        <input
          type={type}
          autoComplete="on"
          ref={ref}
          {...props}
          className="p-2 rounded-lg border border-black bg-gray-100 focus:bg-white"
        />

        {errors && (
          <span className="text-[#EC4899] text-sm mt-1">{errors.message}</span>
        )}
      </div>
    </div>
  );
};

export default forwardRef(TextField);
