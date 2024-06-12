import { useEffect, useState, createContext, ReactNode } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { ICategory, IProduct } from "src/types/";
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

interface AppContextType {
  categories: ICategory[];
  allProducts: IProduct[];
}

export const AppContext = createContext<AppContextType>({
  categories: [],
  allProducts: [],
});

const App = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:4200/categories");
        setCategories(data);
        console.log(data);
      } catch (e) {
        console.error(e as Error + "Скорее всего, ошибка на сервере. 500");
      }
      try {
        const { data } = await axios.get("http://localhost:4200/allProducts");
        setAllProducts(data);
        console.log(data);
      } catch (e) {
        console.error(e as Error + "Скорее всего, ошибка на сервере. 500"); 
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ categories, allProducts }}>
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
    </AppContext.Provider>
  );
};

export default App;
