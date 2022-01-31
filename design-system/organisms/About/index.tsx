import styled from "@emotion/styled";
import { Box, Button, Grid, Stack, Tab, Tabs, Theme } from "@mui/material";
import Image from "next/image";
import { FC, useState } from "react";
import FlexSpacer from "../../atoms/FlexSpacer";
import PageWrapper from "../../atoms/PageWrapper";
import Typography from "../../atoms/Typography";
import { AboutChsb } from "./AboutChsb";
import { AboutFeaturesList } from "./AboutFeaturesList";

const StyledSection = styled(Stack)<{ theme?: Theme }>`
  margin: 8rem 0 0;
`;
interface AboutProps {
  isMobile?: any;
  isTablet?: any;
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const About: FC<AboutProps> = ({ isTablet, isMobile }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledSection>
      <PageWrapper>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "2rem auto",
          }}
        >
          <Typography weight="bold" size="h2">
            About our token
          </Typography>

          <FlexSpacer minHeight={2} />

          <Typography size="body">
            With swissborg you can invest in cryptos the smart way. Buy, sell
            and exchange cryptocurrencies with 16 fiats including EUR, CHF and
            GBP.
          </Typography>
          <FlexSpacer minHeight={4} />
        </Stack>

        <Box sx={{ width: "100%" }} mb={10}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              aria-label="basic tabs example"
            >
              <Tab label="Token CHSB" {...a11yProps(0)} />
              <Tab label="CHSB key features" {...a11yProps(1)} />
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            <Grid
              container
              rowSpacing={4}
              spacing={24}
              columnSpacing={{ sm: 3 }}
              direction={isTablet ? "column-reverse" : "row"}
            >
              <AboutChsb />
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Stack direction="row">
              <Grid
                container
                rowSpacing={4}
                spacing={24}
                columnSpacing={{ sm: 3 }}
                direction="row"
              >
                <AboutFeaturesList />
              </Grid>
            </Stack>
          </TabPanel>
        </Box>
      </PageWrapper>
    </StyledSection>
  );
};

export default About;
