import Home from '../components/Home';

function Index() {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Un Pokedex avec toutes les informations sur vos Pokémon préférés"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Home />
    </>
  );
}

export default Index;
