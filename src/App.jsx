import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      <Navbar />
      <Profile />
      <Repositories />
      <Footer />
    </div>
  );
}

export default App;
