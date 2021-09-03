import Head from 'next/head'
import Header from "../components/Header";
import Post from "../components/Post";
import LeftMenu from "../components/LeftMenu";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rjornal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="wrapper">
          <div className='leftSide'>
            <LeftMenu />
          </div>
          <div className='content'>
            <Post />
          </div>
          <div className='rightSide'> </div>
      </div>
    </div>
  )
}
