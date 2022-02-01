import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head/>
      <main>
          <img src="me.png" id="picture"/>
        <h1 title="Welcome to my resume!" />
        <p className="description">
          please excuse the site while it is under construction
        </p>
          <a
              href="/resume.pdf"
              alt="Israel Brach's Resume"
              target="_blank"
              rel="noopener noreferrer"
          >Download My Resume Here</a>
      </main>

      <Footer />
    </div>
  )
}
