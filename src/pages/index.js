import Head from "next/head";
import Home from "../components/Home";
import Background from "../components/Background";

export default function HomePage() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index" />
        <meta name="Content-Type" content="text/html;charset=utf-8" />
        <meta name="author" content="Angélica Guiselle Mejía Álvarez" />
        <meta
          name="description"
          content="Learn the most fascinating of the universe through the wonderful world of programming"
        />
        <meta
          name="keywords"
          content="programación,universo,aprender,tecnología,actualidad"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>The Dark Side Of The Code</title>
      </Head>
      <main className="container">
        <Background />
        <Home />
      </main>
    </>
  );
}
