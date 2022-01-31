import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Israel Brach's Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my resume!" />
        <p className="description">
          please excuse the site while it is under construction
        </p>
      </main>

      <Footer />
    </div>
  )
}
