export default function DownloadButton({ children, href }) {
  return (
    <a
      href={href}
      className="bg-primary hover:cursor-pointer flex items-center justify-center gap-1.5 transition-colors duration-200 hover:bg-primaryHover text-bg text-[16px] rounded-xl2 h-12 w-34 font-medium"
    >
      {children}
    </a>
  );
}
