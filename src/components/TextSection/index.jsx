import Title from "../Title";
import Description from "../Description";

export default function TextSection({ title, children }) {
  return (
    <section className="text-text2 font-mono flex flex-col gap-2">
      <Title className="font-semibold text-[18px]">{title}</Title>
      <Description>{children}</Description>
    </section>
  );
}
