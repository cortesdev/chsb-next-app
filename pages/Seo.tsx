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
      <meta content="text/html; charset=UTF-8" name="Content-Type" />
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
        content="https://og-image.vercel.app/**CHSB**%20Dahboard.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fremojansen%2Flogo.ts%40master%2Fts.svg&images=https%3A%2F%2Fswissborg-website.cdn.prismic.io%2Fswissborg-website%2Faa90e56e-bbcd-43ad-af4f-f30077c1241f_CHSB-shadow-icon.svg%3Fixlib%3DgatsbyFP%26auto%3Dcompress%252Cformat%26fit%3Dmax%26q%3D50%26w%3D400%26h%3D400"
      />
      {/*   twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@swissborg" />
      <meta name="twitter:creator" content="@cortesdev" />
      <meta name="twitter:title" content="SWISSBORG Dashboard nextjs typescript app" />
      <meta name="twitter:description" content="SWISSBORG Dashboard nextjs typescript app - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here." />
      <meta name="twitter:image" content="https://pbs.twimg.com/card_img/1485358569365114886/10ZSuZpw?format=jpg&name=medium" />
      <meta name="pinterest" content="nopin" />
    </Head>
  );
};

export default Seo;
