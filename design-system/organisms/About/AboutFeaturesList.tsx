import { Button, Card, Chip, Grid, Stack } from "@mui/material";
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
          The SwissBorg Token (CHSB) key features
        </Typography>

        <FlexSpacer minHeight={2} />

        <Typography size="body">
          With SwissBorg, you have the opportunity not only to be a user but to become a real contributor by holding CHSB tokens and benefiting from the growth of the ecosystem.
        </Typography>
      </Stack>

      {AboutFeatureItems.map((items, index) => (
        <Grid item sm={12} md={4} sx={{ flexWrap: "wrap", display: "flex" }}>
          <Card
            sx={{
              padding: 4,
              display: "flex",
              flexDirection: "column",
              borderRadius: 4,
             }}
          >
            {items.subheadline && (
              <Chip
                sx={{
                  width: "40%",
                  maxWidth: "50%",
                  fontSize: ".6rem",
                  background: `${theme.colors.primaryTint9}`,
                  color: `${theme.colors.primary}`,
                  marginBottom: 1,
                }}                
                label={items.subheadline}
              />
            )}

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
              size="body"
              sx={{ minHeight: 130, alignItems: "baseline !important" }}
            >
              {items.text}
            </Typography>

            <FlexSpacer minHeight={2} />
            {items.button && (
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                sx={{ marginTop: "auto", fontSize: ".7rem" }}
              >
                {items.button}
              </Button>
            )}
          </Card>
        </Grid>
      ))}
    </>
  );
};
