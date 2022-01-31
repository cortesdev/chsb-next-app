import { Button, Grid, Stack } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";
import Typography from "../../atoms/Typography";
import { AboutFeatureItems } from "./AboutFeaturesItems";
import FlexSpacer from "../../atoms/FlexSpacer";
import { theme } from "../../../utils/theme";

export const AboutFeaturesList: FC = () => {
  return (
    <>
      <Stack
        direction="column"
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "3rem auto",
        }}
      >
        <Typography weight="bold" size="h3">
          What are its key features?
        </Typography>
        
        <FlexSpacer minHeight={2} />

        <Typography size="body">
          SwissBorg community members can participate and invest in the
          SwissBorg ecosystem with our CHSB multi-utility token issued on the
          Ethereum blockchain.
        </Typography>
      </Stack>

      {AboutFeatureItems.map((items, index) => (
        <Grid item sm={12} md={4}>
          <Stack direction="row" mb={2}>
            <Image width="40" height="40" src={items.url} alt={items.alt} />

            <Typography size="h4" sx={{ marginLeft: 2 }}>
              {items.headline}
            </Typography>
          </Stack>

          <Typography size="h5" sx={{ minHeight: 70 }}>
            {items.subheadline}
          </Typography>

          <FlexSpacer minHeight={1} />

          <Typography size="body" sx={{ minHeight: 100 }}>
            {items.text}
          </Typography>

          <FlexSpacer minHeight={2} />

          <Button variant="outlined" color="primary" fullWidth>
           {items.headline}
          </Button>
        </Grid>
      ))}
    </>
  );
};
