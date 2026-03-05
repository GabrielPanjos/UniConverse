import Tittle from "./Tittle";
import Description from "./Description";

export default function PageHeader({ tittle, description }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 mb-10">
      <Tittle>{tittle}</Tittle>
      <Description>{description}</Description>
    </div>
  );
}
