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
        <Route path="/Blade-shop/" element={<HomePage />} />
        <Route path="/Blade-shop/games" element={<GamesPage />} />
        <Route path="/Blade-shop/manga" element={<MangaPage  />} />
        <Route path="/Blade-shop/smartphones" element={<SmartphonesPage />} />
        <Route path="/Blade-shop/books" element={<BooksPage />} />
        <Route path="/Blade-shop/clothes" element={<ClothesPage />} />
        <Route path="/Blade-shop/tvs" element={<TVsPage />} />
        <Route path="/Blade-shop/videocards" element={<VideocardsPage  />} />
        <Route path="/Blade-shop/proccesors" element={<ProccesorsPage />} />
        <Route path="/Blade-shop/monitors" element={<MonitorsPage />} />
        <Route path="/Blade-shop/sport" element={<SportPage />} />
        <Route path="/Blade-shop/drinks" element={<DrinksPage />} />
        <Route path="/Blade-shop/food" element={<FoodPage />} />
        <Route path="/Blade-shop/auth/signUp" element={<SignUpPage />} />
        <Route path="/Blade-shop/auth/signIn" element={<SignInPage /> } />
        <Route path="/Blade-shop/profile" element={<ProfilePage />} />

        <Route path="/Blade-shop/:cardId" element={<CardPage />} />
      </Routes>
  );
};

export default App;
