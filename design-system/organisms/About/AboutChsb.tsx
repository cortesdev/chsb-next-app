import { Button, Grid, Stack } from "@mui/material";
import React, { FC } from "react";
import FlexSpacer from "../../atoms/FlexSpacer";
import Typography from "../../atoms/Typography";

interface AboutChsbProps  {
  isTablet: any;
}

export const AboutChsb: FC<AboutChsbProps> = ({isTablet}) => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Stack pt={10} px={4}>
          <img           
            src="/images/token-img.png"
          />
        </Stack>
      </Grid>

      <Grid item xs={12} md={6}>
        
        <FlexSpacer minHeight={2} />

        <Stack direction="column" px={isTablet ? 0 : 8}>
          <Typography weight="bold" size="h3">
            What is the CHSB?
          </Typography>

          <FlexSpacer minHeight={2} />

          <Typography size="body">
            SwissBorg community members can participate and invest in the
            SwissBorg ecosystem with our CHSB multi-utility token issued on the
            Ethereum blockchain.
          </Typography>

          <FlexSpacer minHeight={2} />

          <Typography size="h4">The SwissBorg Token (CHSB)</Typography>

          <FlexSpacer minHeight={2} />

          <Typography size="body">
            With SwissBorg, you have the opportunity not only to be a user but
            to become a real contributor by holding CHSB tokens and benefiting
            from the growth of the ecosystem.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            href="/"
            sx={{ marginTop: 10 }}
          >
            See features
          </Button>
        </Stack>
      </Grid>
    </>
  );
};
