import Title from "../Title";
import Description from "../Description";

export default function PageHeader({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 mb-10 text-center">
      <Title className="text-3xl">{title}</Title>
      <Description>{children}</Description>
    </div>
  );
}
