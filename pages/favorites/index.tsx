import { useEffect, useState } from "react";
import { Card, Grid } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import { FavoritePokemos, NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utilis";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemos pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
