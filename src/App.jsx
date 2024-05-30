import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ColorModeSwitcher from "./components/ColorModeSwitcher";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import DeletePost from "./pages/DeletePost.jsx";

function App() {
  return (
    <Router>
      <ColorModeSwitcher />
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/add-post" element={<AddPost />} />
      <Route path="/delete-post/:id" element={<DeletePost />} />
      </Routes>
    </Router>
  );
}

export default App;
