import Layout from "src/lib/Layout";
import Billboard from "src/components/Billboard";
import { ICategory } from "@/types/db";

type Props = {
  db: ICategory[];
}

const Home = ({db}: Props) => {

  return (
    <Layout db={db} active={0}>
      <Billboard typeProducts={0} db={db} />
    </Layout>
  );
};

export default Home;
