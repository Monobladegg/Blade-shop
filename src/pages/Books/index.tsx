import Layout from "src/lib/Layout";
import { ICategory } from "src/types/db";

type Props = {
  db: ICategory[];
}

export const BooksPage = ({db}: Props) => {

  return (
    <Layout db={db} active={3} billboard={true}>
      123
    </Layout>
  );
};