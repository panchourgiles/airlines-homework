import { colors, fonts } from '@styles/theme';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
    color: ${colors.black};
    font-family: ${fonts.base};
    font-size: ${fonts.size.default};
    margin: 0;
    padding: 0;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
