import { Button, Card, Grid, Stack } from "@mui/material";
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
          alignItems: "baseline",
          margin: "0 auto",
        }}
      >
        <FlexSpacer minHeight={4} />

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
        <Grid item sm={12} md={4} sx={{ flexWrap: "wrap", display: "flex" }}>
          <Card
            sx={{
              padding: 4,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Stack direction="row" mb={2}>
              <Image width="40" height="40" src={items.url} alt={items.alt} />

              <Typography
                weight="bold"
                color={theme.colors.primary}
                size="h6"
                sx={{ marginLeft: 2 }}
              >
                {items.headline}
              </Typography>
            </Stack>

            <Typography
              weight="bold"
              size="body"
              sx={{ minHeight: 30, marginBottom: 4 }}
            >
              {items.subheadline}
            </Typography>

            <Typography
              size="body"
              sx={{ minHeight: 130, alignItems: "baseline !important" }}
            >
              {items.text}
            </Typography>

            <FlexSpacer minHeight={2} />

            <Button
              variant="outlined"
              color="primary"
              fullWidth
              sx={{ marginTop: "auto" }}
            >
              {items.headline}
            </Button>
          </Card>
        </Grid>
      ))}
    </>
  );
};
