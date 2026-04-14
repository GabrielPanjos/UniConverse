import NavItem from "../NavItem";
import headerRoutes from "../../data/headerRoutes";

export default function Menu() {
  return (
    <nav className="flex gap-15 justify-end">
      {headerRoutes.map((option) => (
        <NavItem
          to={option.path}
          className={
            "text-text2 hover:text-primaryHover text-[20px] font-semibold "
          }
        >
          {option.name}
        </NavItem>
      ))}
    </nav>
  );
}
