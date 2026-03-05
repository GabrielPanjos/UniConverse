export default function MenuButton({ children }) {
  return (
    <button>
      <h1 className="text-text2 duration-200 hover:text-primaryHover text-[20px] font-semibold">{children}</h1>
    </button>
  );
}
