import Home from '../components/Home';
import Head from 'next/head';

function Index() {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon" />
        <meta
          name="description"
          content="Un Pokedex avec toutes les informations sur vos Pokémon préférés"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <div data-testid="head-mock">
        <Home />
      </div>
    </>
  );
}

export default Index;

