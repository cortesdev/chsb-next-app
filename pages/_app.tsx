import "../styles/globals.css";
import type { AppProps } from "next/app";
import { IntlProvider } from "react-intl";
import {  ThemeProvider } from '@mui/material/styles';
import  {theme} from "../utils/theme";

// const CustomCheckbox = styled(Checkbox)(() => ({
//   color: theme.status.danger,
//   '&.Mui-checked': {
//     color: theme.status.danger,
//   },
// }));

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <IntlProvider locale="en">

      
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </IntlProvider>
  );
}

export default MyApp;
