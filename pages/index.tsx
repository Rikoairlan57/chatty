import type { NextPage } from 'next'
import Head from 'next/head'
import ChatArea from '../components/ChatArea'
import ChatMenu from '../components/ChatMenu'

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Chatty</title>
        <meta name="description" content="Chat your friends here!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-neutral-800 md:flex flex-row h-screen w-full gap-0'>
        <ChatMenu />
        <ChatArea />
      </main>

    </div>
  )
}

export default Home
