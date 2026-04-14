import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

export default function MainTemplate({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Header>
        <Menu />
      </Header>
      <main className="flex-1 flex flex-col max-w-250 container mx-auto px-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}
