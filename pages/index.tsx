import Head from 'next/head'
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rjornal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  )
}
