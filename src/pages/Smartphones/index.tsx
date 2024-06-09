import Layout from "src/lib/Layout";
import Billboard from "src/components/Billboard";
import { ICategory } from "src/types/db";

type Props = {
  db: ICategory[];
}

export const SmartphonesPage = ({db}: Props) => {

  return (
    <Layout db={db} active={0}>
      <Billboard typeProducts={2} db={db} />
    </Layout>
  );
};