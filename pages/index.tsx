import Head from "next/head";
import Content from "../components/Content";
import Header from "../components/Header";
import Divider from "../components/Divider";

export default function HomePage() {
  return (
    <div className="bg-blue-gloss">
      <Head>
        <title>himsngh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Divider/>
      <Content />
      <Divider/>
    </div>
  );
}
