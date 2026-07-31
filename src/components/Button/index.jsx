export default function Button({
  children,
  type = "button",
  onClick,
  disabled = false,
  full = false,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-primary text-white text-[14px] rounded-xl2 h-10 ${
        full ? "w-full" : "w-36"
      } font-semibold
    transition-all duration-200 ease-out
    hover:bg-primaryHover hover:shadow-md hover:-translate-y-0.5
    disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:cursor-not-allowed
    ${className}`}
    >
      {children}
    </button>
  );
}
