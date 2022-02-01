import '@styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "components/Header"
import Head from "components/head"

function Application({ Component, pageProps }) {
  return (
      <>
          <Head/>
          <Header>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Header>
        <Component {...pageProps} />
      </>
  );
}

export default Application
