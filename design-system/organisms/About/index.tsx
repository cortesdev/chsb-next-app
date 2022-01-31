import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import Typography from "../../atoms/Typography";


const About: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack>
      <Typography size="h4">What is the CHSB?</Typography>

      <Typography size="h4">what are its key features?</Typography>
    </Stack>
  );
};

export default About;
