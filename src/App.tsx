import { Routes, Route } from "react-router-dom";
import {
  BooksPage,
  GamesPage,
  HomePage,
  ProccesorsPage,
  TVsPage,
  VideocardsPage,
  MonitorsPage,
  MangaPage,
  SmartphonesPage,
  ClothesPage,
  DrinksPage,
  SportPage,
  FoodPage,
  ProfilePage,
  SignUpPage,
  SignInPage,
  CardPage,
} from "./pages";

const App = () => {

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/manga" element={<MangaPage  />} />
        <Route path="/smartphones" element={<SmartphonesPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/clothes" element={<ClothesPage />} />
        <Route path="/tvs" element={<TVsPage />} />
        <Route path="/videocards" element={<VideocardsPage  />} />
        <Route path="/proccesors" element={<ProccesorsPage />} />
        <Route path="/monitors" element={<MonitorsPage />} />
        <Route path="/sport" element={<SportPage />} />
        <Route path="/drinks" element={<DrinksPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/auth/signUp" element={<SignUpPage />} />
        <Route path="/auth/signIn" element={<SignInPage /> } />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/:cardId" element={<CardPage />} />
      </Routes>
  );
};

export default App;
