import Layout from "src/lib/Layout";
import { Cards } from "src/components/Cards";

export const HomePage = () => {
  return (
    <Layout active={0} billboard={true}>
      <Cards allProducts={true} />
    </Layout>
  );
};
