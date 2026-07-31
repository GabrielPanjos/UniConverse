export default function Input({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  rightIcon,
}) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label
          htmlFor={name}
          className="text-text2 text-[14px] font-medium font-mono"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full h-11 px-3.5 bg-surface2 border rounded-xl2 text-text text-[14px]
          placeholder:text-text3 outline-none transition-colors duration-200
          focus:border-primary ${rightIcon ? "pr-11" : ""}
          ${error ? "border-error" : "border-borderc"}`}
        />

        {rightIcon && (
          <div className="absolute right-3 flex items-center">{rightIcon}</div>
        )}
      </div>

      {error && (
        <span className="text-error text-[12px] font-mono">{error}</span>
      )}
    </div>
  );
}
