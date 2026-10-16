import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Repositories from "./components/Repositories";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      <Navbar />
      <Profile />
      <Repositories />

      <footer className="mt-auto bg-[#222222] px-20 py-6 text-center text-xl text-[#FAF3E1]">
        <p>Every profile on DevHub is public.</p>
      </footer>
    </div>
  );
}

export default App;
