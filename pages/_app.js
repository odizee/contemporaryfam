import '../styles/globals.scss';
import Page from '../components/Page.jsx';

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
