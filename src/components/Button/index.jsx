export default function Button({ children }) {
  return (
    <button
      className="bg-primary text-white text-[14px] rounded-xl2 h-10 w-36 font-semibold
    transition-all duration-200 ease-out
    hover:bg-primaryHover hover:shadow-md hover:-translate-y-0.5"
    >
      {children}
    </button>
  );
}
