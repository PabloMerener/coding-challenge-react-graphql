import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  HttpLink,
  ApolloProvider
} from '@apollo/client';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://demo.vendure.io/shop-api"
  })
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header></Header>
      <div>
        <ProductList></ProductList>
      </div>
    </ApolloProvider>
  );
}

export default App;
