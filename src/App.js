// IMPORT
import { BrowserRouter, Routes, Route} from "react-router-dom";

// STYLE
import "./App.css";

// LAYOUTS
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";

// PAGES
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Portfolio" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;