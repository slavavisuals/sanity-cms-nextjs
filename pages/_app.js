import 'styles/globals.css';
import Layout from 'components/Layout';
import 'highlight.js/styles/monokai-sublime.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
