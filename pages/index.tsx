import Head from "next/head";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>himsngh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}
