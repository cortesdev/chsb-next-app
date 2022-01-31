import { Stack, useMediaQuery, useTheme } from "@mui/material";
import Head from "next/head";
import { FC } from "react";
import Typography from "../design-system/atoms/Typography";

const Seo: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Head>
      <title>CHSB Dashboard</title>
      <title>
        CHSB Dashboard - Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </title>
      <meta
        name="description"
        content="CHSB Dashboard App - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <meta property="og:title" content="CHSB Dashboard App - sample text" />
      <meta
        property="og:description"
        content="A Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <meta
        property="og:url"
        content="https://chsb-next-app-cortesdev.vercel.app/"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://og-image.vercel.app/**Hello**%20World.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&images=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fremojansen%2Flogo.ts%40master%2Fts.svg"
      />
    </Head>
  );
};

export default Seo;
