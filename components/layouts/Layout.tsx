import { FC } from "react";
import Head from "next/head";
import { Navbar } from '../ui';

interface Props {
  children: JSX.Element;
  title?: string;
}

const origin = (typeof window === "undefined" ? "" : window.location.origin);

export const Layout: FC<Props> = ({ children, title }) => {

  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Alex Zamora" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`pokemon, pokedex ${title}`} />
        <meta property="og:title" content={`Información sobre el ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/images/banner.png`} />
      </Head>

      <Navbar />

      <main style={{
        padding: "0px 20px"
      }}>{children}</main>
    </>
  );
};
