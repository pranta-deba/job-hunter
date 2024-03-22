import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <nav className="h-[72px] primary-bg">
        <Navbar />
      </nav>
      <main className="min-h-[calc(100vh-420.8px)]">
        <Outlet></Outlet>
      </main>
      <footer className="bg-[#1A1919] md:px-12 space-y-6">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
