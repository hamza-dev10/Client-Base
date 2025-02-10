const Input = ({
  label,
  id,
  type = "text",
  label2 = "",
  placeholder,
  ...props
}) => {
  return (
    <div>
      <div className="flex justify-between">
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
        <span className="text-[#3E79EF] cursor-pointer">{label2}</span>
      </div>
      <input
        type={type}
        id={id}
        className="w-full px-4 py-4 border border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
