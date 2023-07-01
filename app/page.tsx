import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'

export default function Home() {
  return (
    <div className='bg-gray-50 min-h-screen'>
    <Head>
      <title>Instagram App</title>
    </Head>
    <Header/>
    <Feed/>
    </div>
  )
}
