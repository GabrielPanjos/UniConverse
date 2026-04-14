export default function Title({ children, className }) {
  return <h1 className={`font-medium text-text ${className}`}>{children}</h1>;
}
