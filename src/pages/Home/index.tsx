import Layout from "src/lib/Layout";
import { ICategory } from "@/types/db";
import { Cards } from "src/components/Cards";

type Props = {
  db: ICategory[];
}

export const HomePage = ({db}: Props) => {
  return (
    <Layout db={db} active={0} billboard={true}>
      <Cards db={db} />
    </Layout>
  );
};