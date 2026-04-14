import footerRoutes from "../../data/footerRoutes";
import NavItem from "../NavItem";

export default function Footer() {
  return (
    <footer className="w-full h-60 bg-surface flex flex-col gap-6 items-center justify-center">
      <p className="text-sm text-text2">
        © {new Date().getFullYear()} Uniconverse
      </p>

      <nav>
        <ul className="flex gap-6">
          {footerRoutes.map((option) => (
            <NavItem
              to={option.path}
              className={
                "text-text2 text-sm hover:text-primaryHover font-medium"
              }
            >
              {option.name}
            </NavItem>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
