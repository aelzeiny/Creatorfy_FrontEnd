import { ApolloProvider } from '@apollo/client';
import { ModalProvider } from '../components/providers/ModalProvider';
import { useApollo } from '../graphql/useApollo';
import type { AppProps } from 'next/app';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </ApolloProvider>
  );
}

export default MyApp;
