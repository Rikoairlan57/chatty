import type { NextPage } from 'next'
import Head from 'next/head'
import Chat from '../features/Chat'
import MainMenu from '../features/MainMenu'

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Chatty</title>
        <meta name="description" content="Chat your friends here!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-neutral-800 md:flex flex-row h-screen w-full gap-0'>
        <MainMenu className='basis-1/3' />
        <Chat className='basis-2/3' />
      </main>

    </div>
  )
}

export default Home
