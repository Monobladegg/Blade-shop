import Layout from "src/lib/Layout";
import { ICategory } from "src/types/db";

type Props = {
  db: ICategory[];
}

export const GamesPage = ({db}: Props) => {

  return (
    <Layout db={db} active={0} billboard={true}>
      {/* <Cards db={db} /> */}
      1
    </Layout>
  );
};