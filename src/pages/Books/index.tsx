import Layout from "src/lib/Layout";
import { ICategory } from "@/types/db";

type Props = {
  db: ICategory[];
}

const BooksPage = ({db}: Props) => {

  return (
    <Layout db={db} active={4}>
      123
    </Layout>
  );
};

export default BooksPage;
