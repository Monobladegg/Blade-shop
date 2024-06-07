import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { BooksPage, GamesPage, HomePage, ProccesorsPage, TVsPage, VideocardsPage, MonitorsPage, MangaPage, SmartphonesPage, ClothesPage, DrinksPage, SportPage, FoodPage, ProfilePage, SignUpPage, SignInPage } from "./pages";

const App = () => {
  const [db, setDb] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:4200/categories");
        setDb(data);
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage db={db} />} />
      <Route path="/games" element={<GamesPage db={db} />} />
      <Route path="/manga" element={<MangaPage db={db} />} />
      <Route path="/smartphones" element={<SmartphonesPage db={db} />} />
      <Route path="/books" element={<BooksPage db={db} />} />
      <Route path="/clothes" element={<ClothesPage db={db} />} />
      <Route path="/tvs" element={<TVsPage db={db} />} />
      <Route path="/videocards" element={<VideocardsPage db={db} />} />
      <Route path="/proccesors" element={<ProccesorsPage db={db} />} />
      <Route path="/monitors" element={<MonitorsPage db={db} />} />
      <Route path="/sport" element={<SportPage db={db} />} />
      <Route path="/drinks" element={<DrinksPage db={db} />} />
      <Route path="/food" element={<FoodPage db={db} />} />
      <Route path="/sign-up" element={<SignUpPage db={db} />} />
      <Route path="/sign-in" element={<SignInPage db={db} />} />
      <Route path="/profile" element={<ProfilePage db={db} />} />
    </Routes>
  );
};

export default App;
