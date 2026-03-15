import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import VideoCardDetails from "./pages/VideoCardDetails";
import ChannelDetails from "./pages/ChannelDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoCardDetails />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
