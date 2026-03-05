import MenuButton from "./MenuButton/index.jsx";
import { Link } from "react-router-dom";

export default function Menu() {
  const menuOptions = [
    { name: "Home", path: "/" },
    { name: "Conversor", path: "/conversor" },
  ];

  return (
    <nav className="flex gap-15 justify-end">
      {menuOptions.map((option) => (
        <Link to={option.path}>
          <MenuButton>{option.name}</MenuButton>
        </Link>
      ))}
    </nav>
  );
}
