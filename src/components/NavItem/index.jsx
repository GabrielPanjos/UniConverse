import { Link } from "react-router-dom";

export default function NavItem({ to, children, className }) {
  return (
    <Link className={`duration-200 ${className}`} to={to}>
      {children}
    </Link>
  );
}
