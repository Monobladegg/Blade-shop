import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "src/components/Nav";

const BooksPage = () => {
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
    <div className="main">
      <Nav db={db} active={4} />
    </div>
  );
};

export default BooksPage;
