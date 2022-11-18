import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>himsngh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}
