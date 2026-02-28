import Header from "../../components/Header";
import Menu from "../../components/Menu";

export default function MainTemplate({ children }) {
  return (
    <>
      <Header>
        <Menu />
      </Header>
      {children}
    </>
  );
}
