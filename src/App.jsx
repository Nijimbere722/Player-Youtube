import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import VideoCardDetails from "./pages/VideoCardDetails";
import ChannelDetails from "./pages/ChannelDetails";
import SearchResults from "./pages/SearchResults";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoCardDetails />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;