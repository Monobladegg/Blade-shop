import Layout from "src/lib/Layout";
import { Cards } from "src/components/Cards";

export const HomePage = () => {

  return (
    <Layout active={-1} billboard={true}>
      <Cards allProductsStatus={true} />
    </Layout>
  );
};
