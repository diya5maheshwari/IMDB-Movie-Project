import { Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";
import TopRated from "./pages/TopRated";
import Actor from "./pages/Actor";
import MovieDetails from "./pages/MovieDetails";
import ActorProfile from "./Component/ActorProfile";
import { ReviewProvider } from "./Component/ReviewContext";

function App() {
  return (
    <ReviewProvider>
        <div className="bg-black text-white min-h-screen font-sans">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/actor/:id" element={<ActorProfile />} />
            <Route path="/actor" element={<Actor />} />
            <Route path="/top-rated" element={<TopRated />} />
          </Routes>
        </div>
    </ReviewProvider>
  );
}

export default App;