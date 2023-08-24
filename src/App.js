import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  // 1. Navbar
  // a. Button
  return (
    <div>
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;