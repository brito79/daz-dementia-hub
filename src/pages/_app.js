import { Layout } from "@components/Layout";


export default function LayOutColletive({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  );
}
